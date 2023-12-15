import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { database, storage } from "../../firebase";
import { useState } from "react";
import { set, ref as dbref } from "firebase/database";

const Update = () => {
  // Edit Services
  // Edit Works
  // Edit Contact detils
  // Edit Social Media Profiles
  const [image, setImage] = useState(null);
  const [workTitle, setWorkTitle] = useState("");
  const [workCategory, setWorkCategory] = useState("");
  const [workLink, setWorkLink] = useState("");
  const [category, setCategory] = useState("");

  const handleWorkImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const updateAvatar = (e) => {
    e.preventDefault();
    if (!image) {
      console.log("Please upload a file");
    } else {
      const storageRef = ref(storage, `works/${workTitle}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          // setPercent(percent);
          console.log(percent);
        },
        (err) => alert(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            addWorkToDB(url);
          });
        }
      );
    }
  };

  const addWorkToDB = (workurl) => {
    set(dbref(database, "unscrapMedia/works/" + workTitle), {
      image: workurl,
      title: workTitle,
      category: workCategory,
      link: workLink,
    })
      .then(() => {
        console.log("SUCCESS");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="update-wrapper">
      <div className="update-services prev-admin-section">
        <h2>Add Services</h2>
        {/* Add Services */}
        <form>
          <div className="form-control">
            <input
              className="input input-alt"
              placeholder="Service"
              required
              type="text"
            />
            <span className="input-border input-border-alt"></span>
          </div>

          <div className="form-control">
            <textarea
              className="input input-alt"
              placeholder="Description"
              rows={6}
              required
              type="text"
              maxLength={200}
            />
            <span className="input-border input-border-alt"></span>
          </div>

          <div className="file-upload">
            <input
              id="service-icon"
              // className="input input-alt"
              placeholder="Enter File"
              required
              type="file"
            />
            <label htmlFor="service-icon">Add Icon</label>
          </div>

          <button className="cta">
            <span className="hover-underline-animation"> Add Service </span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
        </form>
      </div>

      <div className="update-works next-admin-section prev-admin-section">
        <h2>Add Works</h2>
        {/* Add Works */}
        <form>
          <div className="form-control">
            <input
              className="input input-alt"
              placeholder="Title"
              value={workTitle}
              onChange={(e) => setWorkTitle(e.target.value)}
              required
              type="text"
            />
            <span className="input-border input-border-alt"></span>
          </div>

          <div className="form-control">
            <input
              className="input input-alt"
              placeholder="Category"
              required
              value={workCategory}
              onChange={(e) => setWorkCategory(e.target.value)}
              type="text"
            />
            <span className="input-border input-border-alt"></span>
          </div>

          <div className="form-control">
            <input
              className="input input-alt"
              placeholder="Link | NULL"
              value={workLink}
              onChange={(e) => setWorkLink(e.target.value)}
              type="text"
            />
            <span className="input-border input-border-alt"></span>
          </div>

          <div className="file-upload">
            <input
              id="work-image"
              placeholder="Enter File"
              required
              type="file"
              onChange={handleWorkImageChange}
            />
            <label htmlFor="work-image">Add Image</label>
          </div>

          <button className="cta" onClick={updateAvatar}>
            <span className="hover-underline-animation"> Add Work </span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
        </form>
      </div>

      <div className="update-works prev-admin-section">
        <h2>Add Work Category</h2>
        {/* Add Work Category */}
        <form>
          <div className="form-control">
            <input
              className="input input-alt"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              type="text"
            />
            <span className="input-border input-border-alt"></span>
          </div>

          <button className="cta" onClick={updateAvatar}>
            <span className="hover-underline-animation"> Add Category </span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
        </form>
      </div>

      <div className="update-contact next-admin-section ">
        <h2>Update Contact</h2>
        {/* Update Contact */}
        <form className="prev-admin-section">
          <div className="form-control">
            <input
              className="input input-alt"
              placeholder="Address"
              required
              type="text"
            />
            <span className="input-border input-border-alt"></span>
          </div>

          <div className="form-control">
            <input
              className="input input-alt"
              placeholder="Phone"
              required
              type="text"
            />
            <span className="input-border input-border-alt"></span>
          </div>

          <div className="form-control">
            <input
              className="input input-alt"
              placeholder="Email"
              required
              type="text"
            />
            <span className="input-border input-border-alt"></span>
          </div>

          <button className="cta">
            <span className="hover-underline-animation"> Update Contact </span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
        </form>

        {/* Send Email to Details */}

        <h2>Email to?</h2>
        <form className="prev-admin-section">
          <div className="form-control">
            <input
              className="input input-alt"
              placeholder="Address"
              required
              type="text"
            />
            <span className="input-border input-border-alt"></span>
          </div>

          <button className="cta">
            <span className="hover-underline-animation"> Update Email To </span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
        </form>

        {/* Display Contact Details */}
        <div className="contact-details next-admin-section">
          <h2>Contact Details</h2>
          <div className="contact-detail">
            <h4>Address</h4>
            <span>address</span>
            <span>address</span>
          </div>
          <div className="contact-detail">
            <h4>Phone</h4>
            <span>phone</span>
            <span>phone</span>
          </div>
          <div className="contact-detail">
            <h4>Email</h4>
            <span>email</span>
            <span>email</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
