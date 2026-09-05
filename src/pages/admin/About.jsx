import { useEffect, useState } from "react";
import {
  getAbout,
  createAbout,
  updateAbout,
} from "../../services/aboutService";

const emptyAbout = {
  fullName: "",
  title: "",
  summary: "",
  email: "",
  phone: "",
  location: "",
  githubUrl: "",
  linkedinUrl: "",
  profileImage: "",
  resumeUrl: "",
};

const About = () => {
  const [about, setAbout] = useState(emptyAbout);
  const [aboutId, setAboutId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadAbout = async () => {
      try {
        const response = await getAbout();

        if (response) {
          setAboutId(response.id);

          setAbout({
            fullName: response.fullName || "",
            title: response.title || "",
            summary: response.summary || "",
            email: response.email || "",
            phone: response.phone || "",
            location: response.location || "",
            githubUrl: response.githubUrl || "",
            linkedinUrl: response.linkedinUrl || "",
            profileImage: response.profileImage || "",
            resumeUrl: response.resumeUrl || "",
          });
        }
      } catch (error) {
        console.error("Failed to load About:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAbout();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAbout((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      let response;

      if (aboutId) {
        response = await updateAbout(aboutId, about);
      } else {
        response = await createAbout(about);
      }

      setAboutId(response.id);

      alert("About information saved successfully.");
    } catch (error) {
      console.error("Failed to save About:", error);

      alert("Failed to save About information.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <h2>About</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>About</h2>

      <p className="text-muted mb-4">
        Manage the information displayed on your public portfolio.
      </p>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Full Name</label>

          <input
            type="text"
            className="form-control"
            name="fullName"
            value={about.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Title</label>

          <input
            type="text"
            className="form-control"
            name="title"
            value={about.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Summary</label>

          <textarea
            className="form-control"
            rows="5"
            name="summary"
            value={about.summary}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              className="form-control"
              name="email"
              value={about.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Phone</label>

            <input
              type="text"
              className="form-control"
              name="phone"
              value={about.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>

          <input
            type="text"
            className="form-control"
            name="location"
            value={about.location}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">GitHub URL</label>

          <input
            type="url"
            className="form-control"
            name="githubUrl"
            value={about.githubUrl}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">LinkedIn URL</label>

          <input
            type="url"
            className="form-control"
            name="linkedinUrl"
            value={about.linkedinUrl}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Profile Image URL</label>

          <input
            type="url"
            className="form-control"
            name="profileImage"
            value={about.profileImage}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Resume URL</label>

          <input
            type="url"
            className="form-control"
            name="resumeUrl"
            value={about.resumeUrl}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={saving}
        >
          {saving ? "Saving..." : "Save About"}
        </button>

      </form>
    </div>
  );
};

export default About;