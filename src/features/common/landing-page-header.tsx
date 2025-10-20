"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-surface backdrop-blur-md">
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
          {/* Mobile Menu Sheet */}
          <Sheet
            open={isMenuOpen}
            onOpenChange={setIsMenuOpen}
          >
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="[&_svg]:size-5 cursor-pointer"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px]"
            >
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6 px-5">
                {/* Navigation Links */}
                <div className="space-y-2">
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
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 space-y-3 border-t border-border">
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
