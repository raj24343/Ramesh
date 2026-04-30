import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ProductSection } from "@/components/sections/ProductSection";

export default function ProductPage() {
  return (
    <div className="page-bg">
      <SiteHeader />
      <main>
        <ProductSection />
      </main>
      <SiteFooter />
    </div>
  );
}
