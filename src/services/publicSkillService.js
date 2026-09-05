import api from "../api/axios";

export const getPublicSkills = async () => {
  const response = await api.get("/public/skills");
  return response.data;
};