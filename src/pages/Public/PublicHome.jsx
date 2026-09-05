import { useEffect, useState } from "react";
import Navbar from "../../component/Public/Navbar";
import Hero from "../../component/Public/Hero";
import AboutSection from "../../component/Public/AboutSection";
import ProjectsSection from "../../component/Public/ProjectsSection";
import CertificationsSection from "../../component/Public/CertificationsSection";
import ContactSection from "../../component/Public/ContactSection";
import PublicSkill from "./PublicSkill";
import { getPublicAbout } from "../../services/publicAboutService";
import { getPublicProjects } from "../../services/publicProjectService";
import { getPublicCertifications } from "../../services/publicCertificationService";

const defaultAbout = {
  fullName: "Shubham Kumar",
  title: "JAVA FULL-STACK DEV.",
  summary:
    "Java Full Stack Developer specializing in building modern, scalable web applications using Java, Spring Boot, React, REST APIs and MySQL.",
  email: "",
  phone: "",
  location: "",
  githubUrl: "",
  linkedinUrl: "",
  profileImage: "",
  resumeUrl: "",
};

const PublicHome = () => {
  const [about, setAbout] = useState(defaultAbout);
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState({
    about: true,
    projects: true,
    certifications: true,
  });

  useEffect(() => {
    let isMounted = true;

    const loadPublicData = async () => {
      const [aboutResult, projectsResult, certificationsResult] = await Promise.allSettled([
        getPublicAbout(),
        getPublicProjects(),
        getPublicCertifications(),
      ]);

      if (!isMounted) {
        return;
      }

      if (aboutResult.status === "fulfilled" && aboutResult.value) {
        setAbout((current) => ({
          ...current,
          ...aboutResult.value,
        }));
      } else if (aboutResult.status === "rejected") {
        console.error("Failed to load public about:", aboutResult.reason);
      }

      if (projectsResult.status === "fulfilled" && Array.isArray(projectsResult.value)) {
        setProjects(projectsResult.value);
      } else if (projectsResult.status === "rejected") {
        console.error("Failed to load public projects:", projectsResult.reason);
      }

      if (
        certificationsResult.status === "fulfilled" &&
        Array.isArray(certificationsResult.value)
      ) {
        setCertifications(certificationsResult.value);
      } else if (certificationsResult.status === "rejected") {
        console.error("Failed to load public certifications:", certificationsResult.reason);
      }

      setLoading({
        about: false,
        projects: false,
        certifications: false,
      });
    };

    loadPublicData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="public-page">
      <Navbar
        fullName={about.fullName}
        resumeUrl={about.resumeUrl}
      />
      <Hero
        about={about}
        hasProjects={projects.length > 0}
      />
      <AboutSection
        about={about}
        loading={loading.about}
      />
      <PublicSkill />
      <ProjectsSection
        projects={projects}
        loading={loading.projects}
      />
      <CertificationsSection
        certifications={certifications}
        loading={loading.certifications}
      />
      <ContactSection
        about={about}
        loading={loading.about}
      />
    </div>
  );
};

export default PublicHome;
