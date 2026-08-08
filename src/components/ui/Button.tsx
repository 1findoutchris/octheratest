import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const baseStyles =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-void";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-cyan to-violet text-void shadow-[0_0_0_1px_rgba(46,230,200,0.25)] hover:shadow-[0_0_30px_-4px_rgba(46,230,200,0.55)] hover:-translate-y-0.5",
  secondary:
    "border border-ink-soft bg-white/[0.03] text-frost backdrop-blur-sm hover:border-cyan/50 hover:bg-white/[0.06] hover:-translate-y-0.5",
  ghost: "text-frost/80 hover:text-frost",
};

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
  external?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  showArrow = true,
  external = false,
  onClick,
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
