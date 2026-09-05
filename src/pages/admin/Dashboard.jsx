import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mt-4">

      <h1 className="mb-2">Dashboard</h1>

      <p className="text-muted mb-4">
        Welcome to Portfolio Admin Dashboard
      </p>

      <div className="row g-4">

        {/* About */}
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4>About</h4>

              <p className="text-muted">
                Manage your portfolio introduction and personal information.
              </p>

              <Link
                to="/admin/about"
                className="btn btn-primary"
              >
                Manage About
              </Link>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4>Skills</h4>

              <p className="text-muted">
                Add, edit and delete your technical skills.
              </p>

              <Link
                to="/admin/skills"
                className="btn btn-primary"
              >
                Manage Skills
              </Link>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4>Experience</h4>

              <p className="text-muted">
                Manage your work experience and training.
              </p>

              <Link
                to="/admin/experience"
                className="btn btn-primary"
              >
                Manage Experience
              </Link>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4>Projects</h4>

              <p className="text-muted">
                Add, edit and delete your portfolio projects.
              </p>

              <Link
                to="/admin/projects"
                className="btn btn-primary"
              >
                Manage Projects
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;