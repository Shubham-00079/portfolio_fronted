import api from "../api/axios";

export const createProject = async (project) => {
    const response = await api.post("/admin/projects", project);
    return response.data;
};

export const getProjects = async () => {
    const response = await api.get("/admin/projects");
    return response.data;
};

export const updateProject = async (id, project) => {
    const response = await api.put(`/admin/projects/${id}`, project);
    return response.data;
};

export const deleteProject = async (id) => {
    return api.delete(`/admin/projects/${id}`);
};
