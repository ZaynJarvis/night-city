import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { useGlitch } from "@/hooks/useGlitch";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  children,
  ref: externalRef,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const glitchRef = useGlitch<HTMLSpanElement>();
  const composedRef = React.useCallback(
    (node: HTMLSpanElement | null) => {
      (glitchRef as React.MutableRefObject<HTMLSpanElement | null>).current = node;
      if (typeof externalRef === "function") externalRef(node);
      else if (externalRef) (externalRef as React.MutableRefObject<HTMLSpanElement | null>).current = node;
    },
    [externalRef, glitchRef],
  );

  const Comp = asChild ? Slot : "span";

  if (asChild) {
    return (
      <Comp
        data-slot="badge"
        ref={externalRef as React.Ref<HTMLSpanElement>}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      data-slot="badge"
      ref={composedRef}
      className={cn(badgeVariants({ variant }), className)}
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

export { Badge, badgeVariants };
