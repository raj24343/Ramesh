import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { TrustSection } from "@/components/sections/TrustSection";

export default function Home() {
  return (
    <div className="page-bg">
      <SiteHeader />

      <main>
         <AboutSection />
        <HeroSection />
       
        <ProductSection />
        <SolutionsSection />
        <TrustSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
