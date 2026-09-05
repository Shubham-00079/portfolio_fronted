const CertificationsSection = ({ certifications, loading }) => {
  const safeCertifications = Array.isArray(certifications) ? certifications : [];

  return (
    <section id="certifications" className="public-section public-certifications">
      <div className="section-heading">
        <span>PROFESSIONAL GROWTH</span>
        <h2>Certifications</h2>
      </div>

      {loading ? (
        <p className="public-empty">
          Loading certifications...
        </p>
      ) : safeCertifications.length === 0 ? (
        <p className="public-empty">
          No certifications are available yet. Connect the certifications API or add data to show this section.
        </p>
      ) : (
        <div className="certification-grid">
          {safeCertifications.map((certification) => (
            <article
              className="certification-card"
              key={certification.id || certification.title || certification.name}
            >
              <div className="certification-header">
                <h3>
                  {certification.title || certification.name}
                </h3>

                {(certification.issueDate || certification.year) && (
                  <span className="certification-year">
                    {certification.issueDate || certification.year}
                  </span>
                )}
              </div>

              <p>
                {certification.issuer || certification.organization || "Certification provider"}
              </p>

              {certification.description && (
                <p className="certification-description">
                  {certification.description}
                </p>
              )}

              {(certification.credentialUrl || certification.certificateUrl) && (
                <a
                  href={certification.credentialUrl || certification.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="section-link-button"
                >
                  View Credential
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
