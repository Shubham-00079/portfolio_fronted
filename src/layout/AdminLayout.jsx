import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>

    </div>
  );
};

export default AdminLayout;