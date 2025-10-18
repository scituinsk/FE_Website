"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ApplicationLogo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { ctaButtons, navigationItems } from "@/constants/landing-page-navigation-config";

export const LandingPageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Prevent hydration mismatch by only rendering active states after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Check if a navigation item is active
  const isActiveRoute = (href: string, exact: boolean) => {
    if (!mounted) return false; // Prevent hydration mismatch

    if (exact) {
      return pathname === href;
    }

    // For non-exact matches, check if pathname starts with href
    // But avoid matching root "/" with other paths
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Get navigation link classes with active state
  const getNavLinkClasses = (href: string, exact: boolean) => {
    const isActive = isActiveRoute(href, exact);
    return cn(navigationMenuTriggerStyle(), isActive && mounted && "bg-primary/10 text-primary font-medium");
  };

  // Get mobile link classes with active state
  const getMobileLinkClasses = (href: string, exact: boolean) => {
    const isActive = isActiveRoute(href, exact);
    return cn(
      "block py-2 transition-colors rounded-md px-2",
      isActive && mounted ? "text-primary bg-primary/5 font-medium" : "text-muted-foreground hover:text-primary hover:bg-muted"
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-surface/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <ApplicationLogo />

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  className={getNavLinkClasses(item.href, item.exact)}
                >
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button & Theme Toggle */}
        <div className="hidden lg:flex items-center space-x-2">
          <ThemeToggle />

          {ctaButtons.map((button) => (
            <Button
              key={button.href}
              variant={button.variant}
              size="sm"
              asChild
            >
              <Link href={button.href}>{button.label}</Link>
            </Button>
          ))}
        </div>

        {/* Mobile Right Section */}
        <div className="lg:hidden flex items-center space-x-2">
          <ThemeToggle />
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="[&_svg]:size-5 cursor-pointer transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={isMenuOpen ? "x" : "menu"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-primary/10 bg-surface/95 backdrop-blur-sm overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {/* Navigation Links */}
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={getMobileLinkClasses(item.href, item.exact)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA Section */}
              <div className="pt-4 space-y-3 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Theme</span>
                  <ThemeToggle />
                </div>

                {/* CTA Buttons */}
                {ctaButtons.map((button) => (
                  <Button
                    key={button.href}
                    variant={button.variant}
                    className="w-full"
                    asChild
                  >
                    <Link
                      href={button.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {button.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
