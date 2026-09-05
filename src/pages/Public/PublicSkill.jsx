import { useEffect, useState } from "react";
import { getPublicSkills } from "../../services/publicSkillService";

const PublicSkill = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const response = await getPublicSkills();
        setSkills(response);
      } catch (error) {
        console.error("Failed to load public skills:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  if (loading) {
    return (
      <section className="public-skills">
        <p className="public-empty">Loading skills...</p>
      </section>
    );
  }

  return (
    <section id="skills" className="public-skills">
      <div className="section-heading">
        <span>MY EXPERTISE</span>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.length === 0 ? (
          <p className="public-empty">
            No skills found.
          </p>
        ) : (
          skills.map((skill) => (
            <div className="skill-card" key={skill.id}>
              <div className="skill-top">
                <div>
                  <h3>{skill.name}</h3>

                  <p>
                    {skill.category}
                  </p>
                </div>

                <strong>
                  {skill.percentage}%
                </strong>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: `${skill.percentage}%`,
                  }}
                ></div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default PublicSkill;
