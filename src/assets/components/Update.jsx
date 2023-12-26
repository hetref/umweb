import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { database, storage } from "../../firebase";
import { useEffect, useState } from "react";
import { set, ref as dbref, onValue, update } from "firebase/database";
import useDbStore from "../../store/dbStore";

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

  const [services, setServices] = useState({ title: "", description: "" });

  const data = useDbStore((state) => state.data);
  const setData = useDbStore((state) => state.setData);

  useEffect(() => {
    console.log(data.work.categories);
  }, [data]);

  const handleWorkImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const addService = async (e) => {
    e.preventDefault();
    console.log("Add Service");

    const dbbref = dbref(database, "unscrapMedia/services");

    const updatedArray = [...data.services.updatedArray, services];

    // Update the array in Realtime Database
    await update(dbbref, { updatedArray });

    getData();
  };

  const addWorks = (e) => {
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
        console.log("WORK ADDED");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCategory = async (e) => {
    e.preventDefault();

    const dbbref = dbref(database, "unscrapMedia/work");
    const updatedArray = [...data.work.categories, category];
    await update(dbbref, { categories: updatedArray });
    getData();
  };

  const getData = async () => {
    const countRef = ref(database, "unscrapMedia");

    onValue(countRef, (snapshot) => {
      const maindata = snapshot.val();
      setData(maindata);
    });
  };

  return (
    <div id="update-wrapper">
      <div className="update-services prev-admin-section">
        <h2>Add Services</h2>
        <form>
          <div className="form-control">
            <input
              className="input input-alt"
              placeholder="Service Title"
              required
              type="text"
              value={services.title}
              onChange={(e) =>
                setServices({ ...services, title: e.target.value })
              }
            />
            <span className="input-border input-border-alt"></span>
          </div>

          <div className="form-control">
            <textarea
              className="input input-alt"
              placeholder="Service Description"
              rows={6}
              required
              type="text"
              maxLength={250}
              value={services.description}
              onChange={(e) =>
                setServices({ ...services, description: e.target.value })
              }
            />
            <span className="input-border input-border-alt"></span>
          </div>

          <button className="cta" onClick={addService}>
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
        <form>
          <div className="form-control">
            <input
              className="input input-alt"
              placeholder="Work Title"
              value={workTitle}
              onChange={(e) => setWorkTitle(e.target.value)}
              required
              type="text"
            />
            <span className="input-border input-border-alt"></span>
          </div>

          <div className="relative group rounded-lg w-full min-w-[300px] max-w-[36rem] bg-[#3d72a41a] overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-[#3d72a480] before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#3d72a44d]">
            <svg
              y="0"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              width="100"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              height="100"
              className="w-8 h-8 absolute right-0 -rotate-45 stroke-[#3d72a3e6] top-1.5 group-hover:rotate-0 duration-300"
            >
              <path
                strokeWidth="4"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                className="svg-stroke-primary"
              ></path>
            </svg>
            <select
              value={workCategory}
              onChange={(e) => setWorkCategory(e.target.value)}
              className="appearance-none hover:placeholder-shown:bg-emerald-500 relative text-[#3d72a3e6] bg-transparent ring-0 outline-none border border-neutral-500 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            >
              <option defaultValue>Select a Category</option>
              {data.work.categories.length != 0 &&
                data.work.categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-control">
            <input
              className="input input-alt"
              placeholder="Work Link | NULL"
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
            <label htmlFor="work-image">Add Work Image</label>
          </div>

          <button className="cta" onClick={addWorks}>
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

      <div className="update-works next-admin-section">
        <h2>Add Work Category</h2>
        <form>
          <div className="form-control">
            <input
              className="input input-alt"
              placeholder="Enter Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              type="text"
            />
            <span className="input-border input-border-alt"></span>
          </div>

          <button className="cta" onClick={addCategory}>
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

      {/* <div className="update-contact next-admin-section ">
        <h2>Update Contact</h2>
        Update Contact
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

        Send Email to Details

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

        Display Contact Details
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
            <h4>Email</h4>
            <span>email</span>
            <span>email</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Update;
