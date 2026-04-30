import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";

export default function AboutPage() {
  return (
    <div className="page-bg">
      <SiteHeader />
      <main>
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
