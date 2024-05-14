import axios from "axios";
import { API_URL } from "../Api";

const addGallery = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${API_URL}/gallery`, data, config);

  return response.data;
};

const getGallery = async () => {
  const response = await axios.get(`${API_URL}/gallery`);

  if (response.data) {
    localStorage.setItem("chariz_gallery", JSON.stringify(response.data));
  }

  return response.data;
};

const getGalleryById = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/project/${id}`, config);
  return response.data;
};

const editGallery = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${API_URL}/gallery/${data.galleryId}`,
    data,
    config
  );
  return response.data;
};

const deleteGallery = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/gallery/${id}`, config);
  return response.data;
};

const projectService = {
  addGallery,
  getGallery,
  deleteGallery,
  editGallery,
  getGalleryById,
};

export default projectService;
