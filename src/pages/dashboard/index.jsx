import { useLocation } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";

import Update from "../../assets/components/Update";
import Contact from "../../assets/components/Contact";
import Users from "../../assets/components/Users";
import Counter from "../../assets/components/Counter";
import ContactDetailsPage from "../../assets/components/ContactDetailsPage";

const Dashboard = () => {
  const location = useLocation();

  const path = location.pathname;
  const pathArray = path.split("/");
  const tab = pathArray[pathArray.length - 1];
  console.log(tab);

  return (
    <div>
      <AdminNavbar />
      <div id="dashboard-wrapper">
        <div className="dashboard">
          {tab === "um-dashboard" ? (
            <Counter />
          ) : tab === "update" ? (
            <Update />
          ) : tab === "contact" ? (
            <Contact />
          ) : tab === "users" ? (
            <Users />
          ) : (
            <ContactDetailsPage />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
