import Seo from "./seo/Seo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import ScheduleCTA from "./components/ScheduleCTA";
import Footer from "./components/Footer";
import WhatsFloat from "./components/WhatsFloat";

export default function App() {
  return (
    <Seo>
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <About />
        <Benefits />
        <ScheduleCTA />
      </main>
      <Footer />
      <WhatsFloat />
    </Seo>
  );
}
