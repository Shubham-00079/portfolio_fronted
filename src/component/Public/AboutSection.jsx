const getInitials = (fullName = "") => {
  const initials = fullName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");

  return initials || "SK";
};

const AboutSection = ({ about, loading }) => {
  const profileActions = [
    about.resumeUrl && {
      href: about.resumeUrl,
      label: "Resume",
    },
    about.githubUrl && {
      href: about.githubUrl,
      label: "GitHub",
    },
    about.linkedinUrl && {
      href: about.linkedinUrl,
      label: "LinkedIn",
    },
  ].filter(Boolean);

  return (
    <section id="about" className="public-section public-about">
      <div className="section-heading">
        <span>INTRODUCTION</span>
        <h2>About</h2>
      </div>

      <div className="about-grid">
        <article className="about-card about-copy">
          <p className="about-kicker">
            {about.fullName || "Portfolio owner"}
          </p>

          <h3>
            {about.title || "Java Full-Stack Developer"}
          </h3>

          <p className="about-summary">
            {loading
              ? "Loading profile details..."
              : about.summary || "Add your About content from the admin panel to introduce yourself here."}
          </p>

          {profileActions.length > 0 && (
            <div className="about-actions">
              {profileActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                  className="section-link-button"
                >
                  {action.label}
                </a>
              ))}
            </div>
          )}
        </article>

        <aside className="about-card about-profile">
          <div className="about-avatar">
            {about.profileImage ? (
              <img
                src={about.profileImage}
                alt={about.fullName || "Profile"}
              />
            ) : (
              <div className="about-avatar-fallback">
                {getInitials(about.fullName)}
              </div>
            )}
          </div>

          <div className="about-meta">
            {about.location && (
              <div className="about-meta-item">
                <span>Location</span>
                <strong>{about.location}</strong>
              </div>
            )}

            {about.email && (
              <div className="about-meta-item">
                <span>Email</span>
                <a href={`mailto:${about.email}`}>
                  {about.email}
                </a>
              </div>
            )}

            {about.phone && (
              <div className="about-meta-item">
                <span>Phone</span>
                <a href={`tel:${about.phone.replace(/\s+/g, "")}`}>
                  {about.phone}
                </a>
              </div>
            )}

            {!loading &&
              !about.location &&
              !about.email &&
              !about.phone && (
                <p className="public-empty">
                  Contact details will appear here after you save them from admin.
                </p>
              )}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AboutSection;
