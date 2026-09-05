import api from "../api/axios";

export const getSkills = async () => {
  const response = await api.get("/admin/skills");
  return response.data;
};

export const createSkill = async (skill) => {
  const response = await api.post("/admin/skills", skill);
  return response.data;
};

export const updateSkill = async (id, skill) => {
  const response = await api.put(`/admin/skills/${id}`, skill);
  return response.data;
};

export const deleteSkill = async (id) => {
  const response = await api.delete(`/admin/skills/${id}`);
  return response.data;
};