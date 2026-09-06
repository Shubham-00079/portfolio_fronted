import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicHome from "./pages/Public/PublicHome";
import Login from "./pages/Login";

import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Projects from "./pages/admin/Projects";
import ProjectForm from "./pages/admin/ProjectForm";
import About from "./pages/admin/About";
import Skills from "./pages/admin/Skills";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC PORTFOLIO */}
        <Route path="/" element={<PublicHome />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* ADMIN PANEL */}
        <Route path="/admin" element={<AdminLayout />}>

          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="about"
            element={<About />}
          />

          <Route
            path="skills"
            element={<Skills />}
          />

          <Route
            path="projects"
            element={<Projects />}
          />

          <Route
            path="projects/new"
            element={<ProjectForm />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
