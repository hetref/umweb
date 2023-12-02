import { useLocation } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";

import Update from "../../assets/components/Update";
import Contact from "../../assets/components/Contact";
import Users from "../../assets/components/Users";

const Dashboard = () => {
  const location = useLocation();

  const path = location.pathname;
  const pathArray = path.split("/");
  const tab = pathArray[pathArray.length - 1];
  console.log(tab);
  return (
    <div>
      <AdminNavbar />
      {tab === "um-dashboard" && <>UM DASHBOARD</>}
      {tab === "update" && <Update />}
      {tab === "contact" && <Contact />}
      {tab === "users" && <Users />}
    </div>
  );
};

export default Dashboard;
