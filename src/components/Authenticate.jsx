import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useForm } from "react-hook-form";

const Authenticate = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [user, setUser] = useState(undefined);

  const { register, handleSubmit } = useForm();

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
    if (e.email === "") {
      alert("Please enter all the fields!");
    } else {
      signInWithEmailAndPassword(auth, e.email, e.password)
        .then(() => {
          navigate("/um-dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
        <form className="form" onSubmit={handleSubmit(login)}>
          <input
            type="text"
            className="input"
            name="email"
            placeholder="Email"
            {...register("email")}
          />
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
            {...register("password")}
          />
          <p className="page-link">
            <span
              className="page-link-label"
              onClick={() => setIsForgotPassword(true)}
            >
              Forgot Password?
            </span>
          </p>
          <button className="form-btn" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authenticate;
