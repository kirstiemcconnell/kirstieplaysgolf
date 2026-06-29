import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import FeaturedContent from "./components/FeaturedContent";
import BrandPartnerships from "./components/BrandPartnerships";
import IdealFit from "./components/IdealFit";
import Pricing from "./components/Pricing";
import InstagramFeed from "./components/InstagramFeed";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <FeaturedContent />
        <BrandPartnerships />
        <IdealFit />
        <Pricing />
        <InstagramFeed />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} @kirstieplaysgolf
      </footer>
    </>
  );
}
