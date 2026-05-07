type VentureCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export function VentureCard({ title, description, tags }: VentureCardProps) {
  return (
    <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_45px_-28px_rgba(34,211,238,0.6)]">
      <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
