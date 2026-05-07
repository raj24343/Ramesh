type KPIStatProps = {
  value: string;
  label: string;
};

export function KPIStat({ value, label }: KPIStatProps) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-[0_0_40px_-30px_rgba(34,197,94,0.4)]">
      <p className="text-3xl font-semibold tracking-tight text-zinc-100">{value}</p>
      <p className="mt-2 text-sm text-zinc-400">{label}</p>
    </article>
  );
}
