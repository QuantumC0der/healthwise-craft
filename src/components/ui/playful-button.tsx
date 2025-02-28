
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface PlayfulButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const PlayfulButton = forwardRef<HTMLButtonElement, PlayfulButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full font-display transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 animate-pop hover-lift",
          {
            "bg-primary text-primary-foreground shadow hover:bg-primary/90": variant === "primary",
            "bg-secondary text-secondary-foreground shadow hover:bg-secondary/90": variant === "secondary",
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "bg-gradient-purple-pink text-white shadow": variant === "default",
            "h-8 px-3 text-xs": size === "sm",
            "h-10 px-5 py-2": size === "md",
            "h-12 px-8 py-3 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

PlayfulButton.displayName = "PlayfulButton";

export { PlayfulButton };
