import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import BrandSlider from "../../components/BrandSlider";
import About from "../../components/About";
import Services from "../../components/Services";
import Works from "../../components/Works";
// import CaseStudy from "../../components/CaseStudy";
import Teams from "../../components/Teams";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Header />
      <BrandSlider />
      <About />
      <Services />
      <Works />
      {/* <CaseStudy /> */}
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
