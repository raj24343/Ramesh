import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SolutionsSection } from "@/components/sections/SolutionsSection";

export default function SolutionsPage() {
  return (
    <div className="page-bg">
      <SiteHeader />
      <main>
        <SolutionsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
