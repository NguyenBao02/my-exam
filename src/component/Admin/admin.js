import { FaList } from "react-icons/fa";
import SideBar from "./sidebar";
import { useState } from "react";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container d-flex">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <FaList onClick={() => setCollapsed(!collapsed)} />
        Bảo
      </div>
    </div>
  );
};

export default Admin;
