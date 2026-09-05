import api from "../api/axios";

export const getAbout = async () => {
  const response = await api.get("/admin/about");
  return response.data;
};

export const createAbout = async (about) => {
  const response = await api.post("/admin/about", about);
  return response.data;
};

export const updateAbout = async (id, about) => {
  const response = await api.put(`/admin/about/${id}`, about);
  return response.data;
};

export const deleteAbout = async (id) => {
  const response = await api.delete(`/admin/about/${id}`);
  return response.data;
};