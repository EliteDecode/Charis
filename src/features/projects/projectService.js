import axios from "axios";
import { API_URL } from "../Api";

const addProject = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${API_URL}/project`, data, config);

  return response.data;
};

const getProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`);

  if (response.data) {
    localStorage.setItem("chariz_projects", JSON.stringify(response.data));
  }

  return response.data;
};

const getProjectById = async (id) => {
  const response = await axios.get(`${API_URL}/project/${id}`);
  return response.data;
};

const editProjects = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${API_URL}/project/${data.projectId}`,
    data,
    config
  );
  return response.data;
};

const deleteProject = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/project/${id}`, config);
  return response.data;
};

const projectService = {
  addProject,
  getProjects,
  deleteProject,
  editProjects,
  getProjectById,
};

export default projectService;
