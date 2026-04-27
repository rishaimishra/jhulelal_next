import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        centered ? "text-center" : "text-left",
        className
      )}
    >
      {subtitle && (
        <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold relative inline-block",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
        {centered && (
          <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-accent rounded-full"></span>
        )}
      </h2>
    </div>
  );
};

export default SectionHeading;
