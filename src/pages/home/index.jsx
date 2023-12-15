import About from "../../components/About";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import Works from "../../components/Works";
import Teams from "../../components/Teams";
import Contact from "../../components/Contact";
import BrandSlider from "../../components/BrandSlider";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Header />
      <BrandSlider />
      <About />
      <Services />
      <Works />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
