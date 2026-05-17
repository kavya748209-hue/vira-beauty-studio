import { About } from "./About";
import { CTASection } from "./CTASection";
import { CelebrityAchievements } from "./CelebrityAchievements";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { Hero } from "./Hero";
import { MapSection } from "./MapSection";
import { Reviews } from "./Reviews";
import { Services } from "./Services";
import { WhyChooseUs } from "./WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <CelebrityAchievements />
      <Gallery />
      <Reviews />
      <FAQ />
      <MapSection />
      <CTASection />
      <Footer />
    </main>
  );
}
