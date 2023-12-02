import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Authentication = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(undefined);

  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(true);
      navigate("/um-dashboard");
    } else {
      setUser(false);
    }
  });

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/um-dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (user === undefined) {
    return (
      <div className="loading-auth">
        <div className="loading-wave">
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
      </div>
    );
  }

  if (isForgotPassword) {
    return (
      <div id="auth-container">
        <div className="form-container">
          <p className="title">Forgot Password</p>
          <form className="form">
            <input type="email" className="input" placeholder="Email" />
            <p className="page-link">
              <span
                className="page-link-label"
                onClick={() => setIsForgotPassword(false)}
              >
                Have Password, Go Back
              </span>
            </p>
            <button className="form-btn">Send</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div id="auth-container">
      <div className="form-container">
        <div className="go-home" onClick={() => navigate("/")}>
          <FaHome className="home-icon" />{" "}
          <span className="home-text">Go Home</span>
        </div>
        <p className="title">Welcome to UM AUTH!</p>
        <h1>{user}</h1>
        <form className="form">
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <p className="page-link">
            <span
              className="page-link-label"
              onClick={() => setIsForgotPassword(true)}
            >
              Forgot Password?
            </span>
          </p>
          <button className="form-btn" type="submit" onClick={login}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
