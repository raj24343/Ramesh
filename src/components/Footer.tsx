import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10">
      <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-zinc-100">Ramesh</p>
          <p className="mt-2 text-sm text-zinc-400">Founder of RS Solutions</p>
        </div>
        <div className="space-y-2 text-sm text-zinc-400">
          <p className="text-zinc-200">Quick links</p>
          <div className="flex gap-4">
            <Link href="#ventures">Ventures</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
        <div className="space-y-2 text-sm text-zinc-400 lg:text-right">
          <div className="flex gap-4 lg:justify-end">
            <Link href="https://linkedin.com" target="_blank">
              LinkedIn
            </Link>
            <Link href="https://github.com" target="_blank">
              GitHub
            </Link>
            <Link href="https://instagram.com" target="_blank">
              Instagram
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Ramesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
