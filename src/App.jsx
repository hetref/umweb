import { useEffect, useState } from "react";
import CursorContextProvider from "./context/CursorContextProvider";
import Cursor from "./assets/components/Cursor";
import NavScrollTop from "./assets/components/NavScrollTop";
import { Toaster } from "react-hot-toast";

// import "swiper/components/navigation/navigation.scss";s
// import "swiper/swiper.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./assets/css/vendor/metropolis.css";
import "./assets/css/vendor/icofont.min.css";
import "./assets/css/vendor/font-awesome.css";
import "./assets/css/vendor/material-design-iconic.min.css";
import "./assets/css/plugins/animate.min.css";
import "./assets/scss/style.scss";

import Home from "./pages/home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CursorContextProvider>
      {windowSize.width > 990 && <Cursor />}
      <Toaster />
      <Router>
        <NavScrollTop />
        <Home />
      </Router>
    </CursorContextProvider>
  );
}

export default App;
