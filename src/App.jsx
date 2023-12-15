import "./app.css";
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
import { auth, database } from "./firebase";
import Authenticate from "./components/Authenticate";

import Hotjar from "@hotjar/browser";
import { onValue, ref, update } from "firebase/database";
import Update from "./assets/components/Update";
import Contact from "./assets/components/Contact";
import Users from "./assets/components/Users";
import useCountStore from "./store/isCounted";
import useDevStore from "./store/devStore";
import useDbStore from "./store/dbStore";

const siteId = 3772901;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [user, setUser] = useState();
  const [count, setCount] = useState(0);

  const mode = useDevStore((state) => state.mode);
  const setData = useDbStore((state) => state.setData);
  const userCount = useCountStore((state) => state.userCount);
  const setUserCount = useCountStore((state) => state.setUserCount);

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

  useEffect(() => {
    const countRef = ref(database, "unscrapMedia");

    onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setCount(data.count);
      setUserCount(data.count);
      setData(data);
    });

    console.log(userCount);
  }, [userCount, setUserCount, setData]);

  useEffect(() => {
    const countRef = ref(database, "unscrapMedia");

    window.addEventListener("beforeunload", () => {
      count != 0 &&
        mode === "PRO" &&
        update(countRef, {
          count: count + 1,
        });
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        count != 0 &&
          mode === "PRO" &&
          update(countRef, {
            count: count + 1,
          });
      });
    };
  }, [count, mode]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(true);
      // console.log(user);
    } else {
      setUser(false);
    }
  });

  return (
    <BrowserRouter>
      <CursorContextProvider>
        {windowSize.width > 990 && <Cursor />}
        <Toaster />
        {/* <button onClick={incrementCount}>Hello</button> */}

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
            <Route path="update" element={<Update />} />
            <Route path="contact" element={<Contact />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </CursorContextProvider>
    </BrowserRouter>
  );
}

export default App;
