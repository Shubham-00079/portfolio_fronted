import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects, deleteProject } from "../../services/projectService";

const Projects = () => {
  const [projects, setProjects] = useState([]);

const loadProjects = async () => {
  try {
    const response = await getProjects();
    setProjects(response);
  } catch (error) {
    console.error("Failed to load projects:", error);
  }
};

useEffect(() => {
  const fetchProjects = async () => {
    try {
      const response = await getProjects();
      setProjects(response);
    } catch (error) {
      console.error("Failed to load projects:", error);
    }
  };

  fetchProjects();
}, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await deleteProject(id);
      loadProjects();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Projects</h2>

        <Link
          to="/admin/projects/new"
          className="btn btn-primary"
        >
          + Add Project
        </Link>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Technology</th>
            <th>Featured</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.technology}</td>
              <td>{project.featured ? "Yes" : "No"}</td>

              <td>
                <button className="btn btn-warning btn-sm me-2">
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(project.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {projects.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center">
                No Projects Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default Projects;