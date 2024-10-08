import Header from "./components/Header";
import About from "./sections/About";
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

export default function App() {
  return (
    <main>
      <Header />
      <section className="mt-[120px]">
        <Banner />
      </section>
      <section className="mt-[70px]">
        <About />
      </section>
      <section className="mt-[139px]">
        <Services />
      </section>
      <section className="mt-[139px]">
        <Projects />
      </section>
      <Testimonials />
      <section className="mt-[139px]">
        <Contact />
      </section>
      <section className="mt-[139px] bg-s7">
        <Footer />
      </section>
    </main>
  )
} 