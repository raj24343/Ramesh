import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
