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
    <main className="overflow-hidden">
      <Header />
      <section className="max-lg:px-[16px] mt-[60px] lg:mt-[120px]">
        <Banner />
      </section>
      <section className="max-lg:px-[16px] mt-[45px] lg:mt-[70px]">
        <About />
      </section>
      <section className="max-lg:px-[16px] mt-[85px] lg:mt-[139px]">
        <Services />
      </section>
      <section className="max-lg:px-[16px] mt-[85px] lg:mt-[139px]">
        <Projects />
      </section>
      <section className="max-lg:px-[16px] mt-[85px] lg:mt-[139px]">
        <Testimonials />
      </section>
      <section className="max-lg:px-[16px] mt-[85px] lg:mt-[139px]">
        <Contact />
      </section>
      <section className="mt-[85px] lg:mt-[139px] bg-s7">
        <Footer />
      </section>
    </main>
  )
} 