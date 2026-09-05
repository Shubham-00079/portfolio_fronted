import api from "../api/axios";

const canFallbackToAdmin = (error) => {
  const status = error?.response?.status;
  return Boolean(localStorage.getItem("token")) && [401, 403, 404].includes(status);
};

export const getPublicCertifications = async () => {
  try {
    const response = await api.get("/public/certifications");
    return response.data;
  } catch (error) {
    if (!canFallbackToAdmin(error)) {
      throw error;
    }

    const response = await api.get("/admin/certifications");
    return response.data;
  }
};
