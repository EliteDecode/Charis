import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectService from "./projectService";
import { createAsyncThunkWithHandler } from "../Api";

const projects = JSON.parse(localStorage.getItem("chariz_projects"));

const initialState = {
  projects: projects ? projects : [],
  singleProject: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  customMessage: "",
};

export const addProject = createAsyncThunkWithHandler(
  "project/addProject",
  async (project, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await projectService.addProject(token, project);
  }
);

export const getProjects = createAsyncThunkWithHandler(
  "project/getProjects",
  async (_, thunkAPI) => {
    return await projectService.getProjects();
  }
);

export const getProjectById = createAsyncThunkWithHandler(
  "project/getProjectById",
  async (id, thunkAPI) => {
    return await projectService.getProjectById(id);
  }
);

export const editProject = createAsyncThunkWithHandler(
  "project/editProject",
  async (project, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await projectService.editProjects(token, project);
  }
);
export const deleteProject = createAsyncThunkWithHandler(
  "project/deleteProject",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await projectService.deleteProject(token, id);
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Project added successfully";
      })
      .addCase(addProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.customMessage = "Project not added";
        state.isSuccess = false;
      })
      .addCase(getProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.projects = action.payload;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })
      .addCase(getProjectById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjectById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleProject = action.payload;
      })
      .addCase(getProjectById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })
      .addCase(editProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Project edited successfully";
        // Update project in state
      })
      .addCase(editProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.customMessage = "Project not edited";
        state.isSuccess = false;
      })
      .addCase(deleteProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Project deleted successfully";
        // Remove project from state
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.customMessage = "Project not deleted";
        state.isSuccess = false;
      });
  },
});

export const { reset } = projectSlice.actions;
export default projectSlice.reducer;
