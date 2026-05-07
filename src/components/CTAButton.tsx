import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: string;
  variant?: "default" | "secondary";
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "default",
  className,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant }), "group", className)}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
