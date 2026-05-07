type FounderCardProps = {
  title: string;
  value: string;
  image: string;
};

export function FounderCard({
  title,
  value,
  image,
}: FounderCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
      
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src= "/founder.jpeg"
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-cyan-400">
          {title}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
          {value}
        </p>
      </div>
    </article>
  );
}