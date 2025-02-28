
import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "blockquote" | "lead" | "large" | "small" | "muted";
}

export function Typography({
  children,
  className,
  variant = "p",
  ...props
}: TypographyProps) {
  const Component = variant === "p" || !variant.match(/^h[1-6]$/) ? variant : variant;

  return React.createElement(
    Component,
    {
      className: cn(
        {
          "text-4xl font-display tracking-tight lg:text-5xl": variant === "h1",
          "text-3xl font-display tracking-tight lg:text-4xl": variant === "h2",
          "text-2xl font-display tracking-tight lg:text-3xl": variant === "h3",
          "text-xl font-display tracking-tight lg:text-2xl": variant === "h4",
          "text-lg font-display tracking-tight lg:text-xl": variant === "h5",
          "text-base font-display tracking-tight lg:text-lg": variant === "h6",
          "text-base font-body": variant === "p",
          "text-lg font-body": variant === "lead",
          "text-sm font-body opacity-90": variant === "small",
          "text-sm font-body text-muted-foreground": variant === "muted",
          "border-l-4 border-primary pl-4 italic": variant === "blockquote",
        },
        className
      ),
      ...props,
    },
    children
  );
}
