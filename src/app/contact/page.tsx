import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactSection } from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <div className="page-bg">
      <SiteHeader />
      <main>
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
