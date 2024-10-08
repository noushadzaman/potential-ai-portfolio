import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

export default function App() {
  return (
    <main>
      <Navbar />
      <Banner />
      <AboutMe />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
} 