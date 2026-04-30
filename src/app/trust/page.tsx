import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrustSection } from "@/components/sections/TrustSection";

export default function TrustPage() {
  return (
    <div className="page-bg">
      <SiteHeader />
      <main>
        <TrustSection />
      </main>
      <SiteFooter />
    </div>
  );
}
