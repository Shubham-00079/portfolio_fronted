import { Link } from "react-router-dom";

const Navbar = ({ fullName, resumeUrl }) => {
  const displayName = fullName?.trim() || "Shubham Kumar";

  return (
    <nav className="public-navbar">
      <div className="public-logo">
        {displayName}
      </div>

      <div className="public-nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="public-nav-actions">
        {resumeUrl && (
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="nav-link-button"
          >
            Resume
          </a>
        )}

        <Link to="/login" className="nav-link-button nav-link-button-secondary">
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
