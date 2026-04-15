import { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function Section({
  children,
  className,
  id,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32 bg-bg-main text-text-main",
        className
      )}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
