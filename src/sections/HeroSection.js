import Hero from "../components/Hero";
import siteConfig from "../data/siteConfig";

export default function HeroSection() {
  return (
    <Hero
      title={siteConfig.companyName}
      ctaText={siteConfig.cta.primary}
      ctaHref="/contact"
    />
  );
}
