import { useState } from "react";
import { createProject } from "../../services/projectService";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {

  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: "",
    description: "",
    technology: "",
    githubUrl: "",
    liveUrl: "",
    imageUrl: "",
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProject({
      ...project,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProject(project);
      alert("Project Added Successfully");
      navigate("/admin/projects");
    } catch (error) {
      console.error(error);
      alert("Failed to add project");
    }
  };

  return (
    <div className="container mt-4">

      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-3"
          name="title"
          placeholder="Project Title"
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-3"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="technology"
          placeholder="Technology"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="githubUrl"
          placeholder="GitHub URL"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="liveUrl"
          placeholder="Live URL"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            name="featured"
            onChange={handleChange}
          />
          <label className="form-check-label">
            Featured Project
          </label>
        </div>

        <button className="btn btn-success">
          Save Project
        </button>

      </form>

    </div>
  );
};

export default ProjectForm;