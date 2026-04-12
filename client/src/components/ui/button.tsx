import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { useGlitch } from "@/hooks/useGlitch";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ref: externalRef,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const glitchRef = useGlitch<HTMLButtonElement>();
  const composedRef = React.useCallback(
    (node: HTMLButtonElement | null) => {
      (glitchRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      if (typeof externalRef === "function") externalRef(node);
      else if (externalRef) (externalRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
    },
    [externalRef, glitchRef],
  );

  const Comp = asChild ? Slot : "button";

  if (asChild) {
    return (
      <Comp
        data-slot="button"
        ref={externalRef as React.Ref<HTMLButtonElement>}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      data-slot="button"
      ref={composedRef}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      <span
        className="scanline-tear__overlay"
        aria-hidden="true"
        style={{
          clipPath: `inset(var(--glitch-clip-top, 100%) 0 var(--glitch-clip-bottom, 100%) 0)`,
          transform: `translateX(var(--glitch-offset-x, 0px))`,
          visibility: "var(--glitch-visibility, hidden)" as React.CSSProperties["visibility"],
        }}
      >
        {children}
      </span>
    </Comp>
  );
}

export { Button, buttonVariants };
