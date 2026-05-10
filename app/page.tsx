import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Process from "./components/Process";
import Work from "./components/Work";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
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
        <Services />
        <Process />
        <Work />
        <About />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
