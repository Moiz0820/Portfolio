import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils"; // Assuming cn is in utils

const glassButtonVariants = cva(
  "relative isolate cursor-pointer rounded-[40px] transition-all bg-[#151515]/60 hover:bg-[#151515]/80 backdrop-blur-md border border-white/10 hover:border-brand-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden group",
  {
    variants: {
      size: {
        default: "text-base font-medium",
        sm: "text-sm font-medium",
        lg: "text-lg font-medium",
        icon: "h-10 w-10",
        full: "w-full",
      },
    },
    defaultVariants: {
      size: "full",
    },
  }
);

const glassButtonTextVariants = cva(
  "relative flex flex-col items-center justify-center select-none tracking-tighter w-full h-full",
  {
    variants: {
      size: {
        default: "px-6 py-5",
        sm: "px-4 py-3",
        lg: "px-8 py-6",
        icon: "flex h-10 w-10 items-center justify-center",
        full: "px-6 py-6",
      },
    },
    defaultVariants: {
      size: "full",
    },
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  contentClassName?: string;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, children, size, contentClassName, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative cursor-pointer transition-transform duration-300 hover:-translate-y-1 w-full group",
          className
        )}
      >
        {/* Glow behind the button */}
        <div className="absolute inset-0 z-0 bg-brand-500/0 group-hover:bg-brand-500/10 blur-xl transition-all duration-500 rounded-[40px]" />
        
        <button
          className={cn("w-full h-full relative z-10 block", glassButtonVariants({ size }))}
          ref={ref}
          {...props}
        >
          {/* Shine effect overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/5 to-transparent transition-opacity duration-500 z-10 pointer-events-none" />
          
          <span
            className={cn(
              glassButtonTextVariants({ size }),
              contentClassName
            )}
          >
            {children}
          </span>
        </button>
      </div>
    );
  }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };
