import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="admin-sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          SK
        </div>

        <div>
          <h3>Portfolio</h3>
          <span>Admin</span>
        </div>
      </div>

      {/* Main Menu */}
      <div className="sidebar-section-title">
        MAIN
      </div>

      <nav className="sidebar-menu">

        <Link to="/admin/dashboard">
          <span>⌂</span>
          Dashboard
        </Link>

        <Link to="/admin/about">
          <span>◉</span>
          About
        </Link>

        <Link to="/admin/skills">
          <span>◆</span>
          Skills
        </Link>

        <Link to="/admin/experience">
          <span>▣</span>
          Experience
        </Link>

        <Link to="/admin/projects">
          <span>▰</span>
          Projects
        </Link>

      </nav>

      {/* Account */}
      <div className="sidebar-bottom">

        <div className="sidebar-section-title">
          ACCOUNT
        </div>

        <button
          className="sidebar-logout"
          onClick={handleLogout}
        >
          <span>↪</span>
          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;