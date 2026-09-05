const fallbackSummary =
  "Java Full Stack Developer specializing in building modern, scalable web applications using Java, Spring Boot, React, REST APIs and MySQL.";

const Hero = ({ about, hasProjects }) => {
  const displayName = about?.fullName?.trim() || "Shubham Kumar";
  const displayTitle = about?.title?.trim() || "JAVA FULL-STACK DEV.";
  const displaySummary = about?.summary?.trim() || fallbackSummary;
  const resumeUrl = about?.resumeUrl?.trim();

  return (
    <section id="home" className="public-hero">
      <div className="hero-glow"></div>

      <div className="hero-content">
        <div className="availability">
          <span className="status-dot"></span>
          AVAILABLE FOR NEW OPPORTUNITIES
        </div>

        <p className="hero-intro">
          Hello, I&apos;m {displayName}
        </p>

        <h1>
          Building Modern
          <br />
          <span>Digital Experiences</span>
        </h1>

        <h2>
          {displayTitle}
        </h2>

        <p>
          {displaySummary}
        </p>

        <div className="hero-buttons">
          <a href={hasProjects ? "#projects" : "#about"} className="hero-primary-btn">
            View My Work
            <span>-&gt;</span>
          </a>

          {resumeUrl ? (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hero-secondary-btn"
            >
              View Resume
            </a>
          ) : (
            <a href="#contact" className="hero-secondary-btn">
              Let&apos;s Connect
            </a>
          )}
        </div>

        <div className="hero-tech">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>React</span>
          <span>REST API</span>
          <span>MySQL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
