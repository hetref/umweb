import { useCallback, useContext, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { CursorContext } from "../../context/CursorContextProvider";
import { ref, serverTimestamp, set } from "firebase/database";
import { database } from "../../firebase";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [timestamp, setTimestamp] = useState();
  const [, setCursor] = useContext(CursorContext);

  useEffect(() => {
    const today = new Date();
    setTimestamp(
      `${today.getFullYear()}${today.getMonth()}${today.getDate()}${today.getHours()}${today.getMinutes()}${today.getSeconds()}`
    );

    console.log(timestamp);

    console.log(today);
  }, [timestamp]);

  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  });

  const notifySuccess = (message, icon) =>
    toast.success(message, {
      duration: 4000,
      position: "bottom-right",
      style: {},
      className: "",
      icon,
    });

  const notifyError = (message, icon) =>
    toast.error(message, {
      duration: 4000,
      position: "bottom-right",
      style: {},
      className: "",
      icon,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      firstName === "" ||
      firstName.length === 0 ||
      lastName === "" ||
      lastName.length === 0 ||
      phoneNo === "" ||
      phoneNo.length === 0 ||
      email === "" ||
      email.length === 0
    ) {
      notifyError("Please enter all the required fields", "🙏");
      setLoading(false);
    } else {
      set(ref(database, "unscrapMedia/contact/" + timestamp), {
        name: firstName + " " + lastName,
        phoneNo,
        email,
        message:
          message.length === 0 || message === "" ? "No Message" : message,
        timestamp: serverTimestamp(),
      })
        .then(() => {
          console.log("WORK ADDED");
        })
        .catch((err) => {
          console.log(err);
        });

      emailjs
        .send(
          "service_0zyslu8",
          "template_cadhcun",
          {
            from_name: firstName + " " + lastName,
            to_name: "Aryan Shinde",
            from_email: email,
            to_email: "aryan.unscrapmedia@gmail.com",
            from_phoneNo: phoneNo,
            message:
              message === "" || message.length === 0 ? "No Message" : message,
          },
          "_lFuPk3VscEw-5oGu"
        )
        .then(() => {
          notifySuccess(
            "Thank you! We'll get back to you at the earliest",
            "😊"
          );
        })
        .catch((err) => {
          console.error(err);
          notifyError("Ahh, something went wrong. Please try again.", "😅");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      <form id="contactForm" className="row">
        <div className="col-12 col-sm-6 mb-7">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Your First Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-12 col-sm-6 mb-7">
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder="Your Last Name*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col-12 col-sm-6 mb-7">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Your Phone Number*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-12 col-sm-6 mb-7">
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder="Your Email Address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col-12 mb-9">
          <textarea
            className="form-control massage-control"
            name="message"
            id="massage"
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="col-12">
          <button
            id="contactSubmit"
            type="submit"
            className="btn btn-dark btn-hover-dark"
            data-complete-text="Well Done!"
            onClick={handleSubmit}
            disabled={loading}
            onMouseEnter={toggleCursor}
            onMouseLeave={toggleCursor}
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
