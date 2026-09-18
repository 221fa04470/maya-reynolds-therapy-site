import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import About from "@/components/About";
import OurOffice from "@/components/OurOffice";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhoWeHelp />
        <Services />
        <About />
        <OurOffice />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
