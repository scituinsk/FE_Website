"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { Partner } from "@/constants/partners";
import { staggerItem } from "@/utils/animations";

interface PartnerCardProps {
  partner: Partner;
  showBadge?: boolean;
}

export const PartnerCard = ({ partner, showBadge = true }: PartnerCardProps) => {
  return (
    <Link
      href={partner.website}
      target="_blank"
      className="w-full"
    >
      <motion.div
        variants={staggerItem}
        className="group relative"
      >
        <div
          className={`
          flex items-center justify-center p-4 md:p-6 rounded-xl bg-card border border-border/50 
          hover:border-primary/20 hover:shadow-lg transition-all duration-300 
          min-h-[80px] md:min-h-[100px]
          dark:bg-card/50 dark:border-border/30 dark:hover:border-primary/30
          ${partner.website ? "cursor-pointer" : "cursor-default"}
        `}
        >
          <div className="relative p-2 md:p-3 rounded-lg bg-white/90 dark:bg-white/95 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-white transition-all duration-300 shadow-sm group-hover:shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-8 md:h-10 lg:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          {/* Partnership type badge */}
          {showBadge && (
            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-primary text-white rounded-full">
                {partner.website && <ExternalLink className="w-3 h-3" />}
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
};
