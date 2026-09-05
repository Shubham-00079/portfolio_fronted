const splitTechnology = (technology = "") =>
  technology
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const ProjectsSection = ({ projects, loading }) => {
  const safeProjects = Array.isArray(projects) ? projects : [];
  const visibleProjects = safeProjects.some((project) => project?.featured)
    ? safeProjects.filter((project) => project?.featured)
    : safeProjects;

  return (
    <section id="projects" className="public-section public-projects">
      <div className="section-heading">
        <span>SELECTED WORK</span>
        <h2>Projects</h2>
      </div>

      {loading ? (
        <p className="public-empty">
          Loading projects...
        </p>
      ) : visibleProjects.length === 0 ? (
        <p className="public-empty">
          No public projects are available yet. Add them from the admin panel to show them here.
        </p>
      ) : (
        <div className="project-grid">
          {visibleProjects.map((project) => {
            const technologies = splitTechnology(project.technology);

            return (
              <article className="project-card" key={project.id || project.title}>
                <div className="project-media">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title || "Project preview"}
                    />
                  ) : (
                    <div className="project-placeholder">
                      Project Preview
                    </div>
                  )}
                </div>

                <div className="project-body">
                  <div className="project-header">
                    <h3>{project.title}</h3>

                    {project.featured && (
                      <span className="project-badge">
                        Featured
                      </span>
                    )}
                  </div>

                  <p>
                    {project.description || "Description coming soon."}
                  </p>

                  {technologies.length > 0 && (
                    <div className="project-tags">
                      {technologies.map((technology) => (
                        <span className="project-tag" key={`${project.id || project.title}-${technology}`}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="project-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="section-link-button"
                      >
                        Live Demo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="section-link-button section-link-button-secondary"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
