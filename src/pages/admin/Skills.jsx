import { useEffect, useState } from "react";
import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../../services/skillService";

const emptySkill = {
  name: "",
  percentage: "",
  icon: "",
  category: "",
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState(emptySkill);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const response = await getSkills();
        setSkills(response);
      } catch (error) {
        console.error("Failed to load skills:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  const loadSkills = async () => {
    try {
      const response = await getSkills();
      setSkills(response);
    } catch (error) {
      console.error("Failed to load skills:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSkill((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateSkill(editingId, skill);
        alert("Skill updated successfully.");
      } else {
        await createSkill(skill);
        alert("Skill added successfully.");
      }

      setSkill(emptySkill);
      setEditingId(null);
      await loadSkills();
    } catch (error) {
      console.error("Failed to save skill:", error);
      alert("Failed to save skill.");
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);

    setSkill({
      name: item.name || "",
      percentage: item.percentage || "",
      icon: item.icon || "",
      category: item.category || "",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this skill?")) {
      return;
    }

    try {
      await deleteSkill(id);
      await loadSkills();
    } catch (error) {
      console.error("Failed to delete skill:", error);
      alert("Failed to delete skill.");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setSkill(emptySkill);
  };

  return (
    <div className="container mt-4">

      <h2>Skills</h2>

      <p className="text-muted">
        Manage the skills displayed on your portfolio.
      </p>

      <div className="card shadow-sm mb-4">
        <div className="card-body">

          <h5 className="mb-3">
            {editingId ? "Edit Skill" : "Add Skill"}
          </h5>

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Skill Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={skill.name}
                  onChange={handleChange}
                  placeholder="Java"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Percentage
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="percentage"
                  value={skill.percentage}
                  onChange={handleChange}
                  placeholder="90"
                  min="0"
                  max="100"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Icon
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="icon"
                  value={skill.icon}
                  onChange={handleChange}
                  placeholder="java"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Category
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={skill.category}
                  onChange={handleChange}
                  placeholder="Backend"
                />
              </div>

            </div>

            <button
              type="submit"
              className="btn btn-primary me-2"
            >
              {editingId ? "Update Skill" : "Add Skill"}
            </button>

            {editingId && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}

          </form>

        </div>
      </div>

      <div className="card shadow-sm">

        <div className="card-body">

          <h5 className="mb-3">
            Existing Skills
          </h5>

          {loading ? (
            <p>Loading skills...</p>
          ) : skills.length === 0 ? (
            <p className="text-muted">
              No skills found.
            </p>
          ) : (
            <div className="table-responsive">

              <table className="table table-bordered">

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Percentage</th>
                    <th>Category</th>
                    <th>Icon</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {skills.map((item) => (
                    <tr key={item.id}>

                      <td>{item.name}</td>

                      <td>
                        {item.percentage}%
                      </td>

                      <td>
                        {item.category}
                      </td>

                      <td>
                        {item.icon}
                      </td>

                      <td>

                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>

                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Skills;