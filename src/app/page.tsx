import AboutSection from "@/components/sections/AboutSection";
import HomeSection from "@/components/sections/HomeSection";
import JourneySection from "@/components/sections/JourneySection";
import WorkSection from "@/components/sections/WorkSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HomeSection />
      <AboutSection />
      <WorkSection />
      <JourneySection />
      <SiteFooter />
    </main>
  );
}
