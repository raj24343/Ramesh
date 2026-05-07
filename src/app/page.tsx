import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTAButton } from "@/components/CTAButton";
import { Footer } from "@/components/Footer";
import { FounderCard } from "@/components/FounderCard";
import { KPIStat } from "@/components/KPIStat";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { TechMarquee } from "@/components/TechMarquee";
import { VentureCard } from "@/components/VentureCard";
import {
  experience,
  faqItems,
  kpiStats,
  marqueeItems,
  projects,
  services,
  statusChips,
  testimonials,
  ventures,
  visionCards,
} from "@/lib/portfolio-data";

export default function Home() {
  return (
    <div className="bg-[#0b0c0f] text-[#f3f4f6]">
      <Navbar />
      <main className="mx-auto w-full max-w-[1200px] space-y-[100px] px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <section id="home" className="relative space-y-8 pt-8">
          <MotionWrapper className="flex justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-[0_0_45px_-28px_rgba(34,211,238,0.7)] md:h-28 md:w-28">
              <Image
                src="/founder.jpeg"
                alt="Ramesh"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 96px, 112px"
              />
            </div>
          </MotionWrapper>
          <MotionWrapper>
            <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-300">
              Building the future of digital operations
            </span>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {statusChips.map((chip) => (
                <span key={chip} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  {chip}
                </span>
              ))}
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-sm text-zinc-400">
              Based in India. Collaborating with startups, institutions, and global businesses.
            </p>
          </MotionWrapper>
          <MotionWrapper delay={0.3}>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Founder Building Scalable Digital Products & Operational Systems
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.35}>
            <p className="max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
              I help organizations transform operations through scalable SaaS platforms, intelligent workflows, and technology-driven execution.
            </p>
          </MotionWrapper>
          <MotionWrapper delay={0.4}>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-500 md:text-base">
              Founder of RS Solutions — building modern software systems, ERP platforms, automation tools, and scalable digital infrastructure for educational institutions and businesses.
            </p>
          </MotionWrapper>
          <MotionWrapper delay={0.5} className="flex flex-wrap gap-3">
            <CTAButton href="#ventures">Explore Ventures</CTAButton>
            <CTAButton href="#projects" variant="secondary">
              View Projects
            </CTAButton>
            <CTAButton href="#contact" variant="secondary">
              Let&apos;s Connect
            </CTAButton>
            <CTAButton href="#" variant="secondary">
              Download Company Profile
            </CTAButton>
          </MotionWrapper>
          <MotionWrapper delay={0.55} className="flex flex-wrap gap-4 text-sm text-zinc-400">
            <Link href="https://linkedin.com" target="_blank">LinkedIn</Link>
            <Link href="https://github.com" target="_blank">GitHub</Link>
            <Link href="https://instagram.com" target="_blank">Instagram</Link>
            <Link href="mailto:founder@rssolutions.in">Email</Link>
          </MotionWrapper>
        </section>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kpiStats.map((stat, index) => (
            <MotionWrapper key={stat.label} delay={index * 0.05}>
              <KPIStat value={stat.value} label={stat.label} />
            </MotionWrapper>
          ))}
        </section>

        <section className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 py-4">
          <TechMarquee items={marqueeItems} />
        </section>

        <section id="vision" className="space-y-8">
          <SectionHeading title="Building technology that simplifies operations and creates scalable impact." />
          <div className="grid gap-4 md:grid-cols-2">
            {visionCards.map((card, index) => (
              <MotionWrapper key={card.index} delay={index * 0.08}>
                <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                  <p className="font-mono text-xs text-cyan-300">{card.index}</p>
                  <h3 className="mt-3 text-lg font-semibold text-zinc-100">{card.title}</h3>
                  <p className="mt-3 text-sm text-zinc-400">{card.description}</p>
                </article>
              </MotionWrapper>
            ))}
          </div>
        </section>

        <section id="about" className="space-y-8">
          <SectionHeading title="Founder, operator, and builder focused on scalable digital transformation." />
          <div className="space-y-4 text-zinc-400">
            <p>I am a founder and product strategist focused on building scalable SaaS products and operational systems that solve real-world workflow challenges.</p>
            <p>My work combines startup execution, technology leadership, and business operations — helping organizations modernize processes through ERP systems, workflow automation, AI-powered tools, and cloud-based platforms.</p>
            <p>As the founder of RS Solutions, I work across product strategy, execution, system architecture, growth planning, and operational transformation.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <FounderCard title="Founder Of" value="RS Solutions" image="/founder.jpeg" />
            <FounderCard title="Focus Areas" value="SaaS, ERP, AI workflows, automation, operations, product systems" image="/founder.jpeg" />
            <FounderCard title="Mission" value="Building scalable systems that simplify operations and create measurable impact." image="/founder.jpeg" />
          </div>
        </section>

        <section id="ventures" className="space-y-8">
          <SectionHeading title="Products, systems, and operational platforms being built." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ventures.map((venture) => (
              <VentureCard key={venture.title} {...venture} />
            ))}
          </div>
        </section>

        <section id="services" className="space-y-8">
          <SectionHeading title="Helping organizations build, scale, and modernize operations." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <MotionWrapper key={service} delay={index * 0.04}>
                <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-sm text-zinc-300">
                  {service}
                </article>
              </MotionWrapper>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-8">
          <SectionHeading title="Founder-led execution backed by real operational systems." />
          <div className="space-y-4">
            {experience.map((item) => (
              <article key={item.role} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                <p className="text-sm text-cyan-300">{item.period}</p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-100">{item.role}</h3>
                <p className="mt-3 text-sm text-zinc-400">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <SectionHeading title="Projects built for real operational impact." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all hover:-translate-y-1 hover:shadow-[0_0_45px_-28px_rgba(34,197,94,0.55)]">
                <h3 className="text-lg font-semibold text-zinc-100">{project}</h3>
                <p className="mt-3 text-sm text-zinc-400">Operationally focused platform engineered for scale, reliability, and measurable outcomes.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "PostgreSQL"].map((tech) => (
                    <span key={tech} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  <CTAButton href="#" variant="secondary" className="h-9 px-3 text-xs">
                    Demo
                  </CTAButton>
                  <CTAButton href="#" variant="secondary" className="h-9 px-3 text-xs">
                    Case Study
                  </CTAButton>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="space-y-8">
          <SectionHeading title="What collaborators say about founder-led execution." />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.author} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                <p className="text-sm leading-relaxed text-zinc-300">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-cyan-300">{item.author}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="space-y-8">
          <SectionHeading title="Frequently asked questions." />
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-5">
            <Accordion type="single" collapsible>
              {faqItems.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="space-y-8">
          <SectionHeading title="Let’s build scalable systems together." />
          <div className="grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 lg:grid-cols-2">
            <div className="space-y-4 text-zinc-400">
              <p>Founder email: founder@rssolutions.in</p>
              <p>LinkedIn: linkedin.com/in/ramesh</p>
              <p>Instagram: instagram.com/ramesh</p>
              <p>GitHub: github.com/ramesh</p>
            </div>
            <form className="grid gap-3">
              <input className="contact-input" placeholder="Name" />
              <input className="contact-input" placeholder="Email" type="email" />
              <input className="contact-input" placeholder="Organization" />
              <textarea className="contact-input min-h-32" placeholder="Project Details" />
              <button className="rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
