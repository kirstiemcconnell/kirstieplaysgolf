import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import FeaturedContent from "./components/FeaturedContent";
import BrandPartnerships from "./components/BrandPartnerships";
import Demographics from "./components/Demographics";
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
        <Demographics />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} @kirstieplaysgolf
      </footer>
    </>
  );
}
