import { useEffect, useState } from "react";
import CursorContextProvider from "./context/CursorContextProvider";
import Cursor from "./assets/components/Cursor";
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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./assets/components/ProtectedRoute";
import Dashboard from "./pages/dashboard/";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Authenticate from "./components/Authenticate";

import Hotjar from "@hotjar/browser";

const siteId = 3772901;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [user, setUser] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(true);
      console.log(user);
    } else {
      setUser(false);
    }
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
  }, [user]);

  return (
    <BrowserRouter>
      <CursorContextProvider>
        {windowSize.width > 990 && <Cursor />}
        <Toaster />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="um-login" element={<Authenticate />} />
          <Route
            path="um-dashboard"
            element={
              <ProtectedRoute user={user} route="/um-login">
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="update" />
            <Route path="contact" />
            <Route path="users" />
          </Route>
        </Routes>
      </CursorContextProvider>
    </BrowserRouter>
  );
}

export default App;
