import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-2xl text-sm font-extrabold tracking-wide ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-[0_8px_30px_hsl(39_100%_58%/0.5)] hover:-translate-y-1 hover:scale-105 hover:brightness-110 active:scale-95 active:translate-y-0",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg hover:shadow-destructive/30 hover:-translate-y-1 hover:scale-105 active:scale-95",
        outline: "border-2 border-primary bg-transparent text-primary shadow-lg shadow-primary/10 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_8px_30px_hsl(39_100%_58%/0.4)] hover:-translate-y-1 hover:scale-105 active:scale-95",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/70 hover:shadow-lg hover:-translate-y-1 hover:scale-105 active:scale-95",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:-translate-y-0.5 hover:scale-102 active:scale-98",
        link: "text-primary underline-offset-4 hover:underline hover:brightness-125",
        hero: "relative overflow-hidden bg-gradient-to-r from-primary via-amber-500 to-primary bg-[length:200%_100%] animate-gradient-x text-primary-foreground font-extrabold uppercase tracking-widest shadow-[0_0_40px_hsl(39_100%_58%/0.5),0_10px_50px_-10px_hsl(39_100%_58%/0.6)] hover:shadow-[0_0_80px_hsl(39_100%_58%/0.8),0_25px_60px_-10px_hsl(39_100%_58%/0.8)] hover:-translate-y-3 hover:scale-110 hover:brightness-110 active:translate-y-0 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
        heroOutline: "relative overflow-hidden border-2 border-primary bg-primary/10 text-primary font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_30px_hsl(39_100%_58%/0.2),inset_0_0_30px_hsl(39_100%_58%/0.08)] hover:bg-primary/30 hover:border-primary hover:shadow-[0_0_60px_hsl(39_100%_58%/0.6),inset_0_0_50px_hsl(39_100%_58%/0.2)] hover:-translate-y-3 hover:scale-110 hover:brightness-110 active:translate-y-0 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/30 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-xl px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base rounded-2xl md:h-16 md:px-12 md:text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
