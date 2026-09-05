import api from "../api/axios";

const canFallbackToAdmin = (error) => {
  const status = error?.response?.status;
  return Boolean(localStorage.getItem("token")) && [401, 403, 404].includes(status);
};

export const getPublicAbout = async () => {
  try {
    const response = await api.get("/public/about");
    return response.data;
  } catch (error) {
    if (!canFallbackToAdmin(error)) {
      throw error;
    }

    const response = await api.get("/admin/about");
    return response.data;
  }
};
