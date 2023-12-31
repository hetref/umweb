import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Authentication = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [user, setUser] = useState(undefined);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
    if (formData.email === "" || formData.email.length === 0) {
      alert("Please enter all the fields!");
    } else {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
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
        <form className="form">
          <input
            type="email"
            className="input"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            className="input"
            name="password"
            value={formData.password}
            onChange={handleChange}
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
