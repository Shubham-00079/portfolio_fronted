const ContactSection = ({ about, loading }) => {
  const contactItems = [
    about.email && {
      label: "Email",
      value: about.email,
      href: `mailto:${about.email}`,
    },
    about.phone && {
      label: "Phone",
      value: about.phone,
      href: `tel:${about.phone.replace(/\s+/g, "")}`,
    },
    about.location && {
      label: "Location",
      value: about.location,
    },
  ].filter(Boolean);

  const socialItems = [
    about.githubUrl && {
      label: "GitHub",
      href: about.githubUrl,
    },
    about.linkedinUrl && {
      label: "LinkedIn",
      href: about.linkedinUrl,
    },
    about.resumeUrl && {
      label: "Resume",
      href: about.resumeUrl,
    },
  ].filter(Boolean);

  return (
    <section id="contact" className="public-section public-contact">
      <div className="section-heading">
        <span>GET IN TOUCH</span>
        <h2>Contact</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>
            Ready to connect?
          </h3>

          <p>
            {loading
              ? "Loading contact details..."
              : "Use this section for direct contact details, social links, and the latest resume."}
          </p>
        </div>

        <div className="contact-card">
          {contactItems.length > 0 ? (
            <div className="contact-list">
              {contactItems.map((item) => (
                <div className="contact-item" key={item.label}>
                  <span>{item.label}</span>

                  {item.href ? (
                    <a href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    <strong>{item.value}</strong>
                  )}
                </div>
              ))}
            </div>
          ) : !loading ? (
            <p className="public-empty">
              Save email, phone, or location in the About admin page to display them here.
            </p>
          ) : null}

          {socialItems.length > 0 && (
            <div className="contact-actions">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="section-link-button"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
