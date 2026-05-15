import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import AboutCV from "./components/AboutCV";
import Work from "./components/Work";
import Contact from "./components/Contact";
import StructuredData from "./components/StructuredData";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Loader />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <AboutCV />
        <Work />
        <Contact />
      </main>
    </>
  );
}
