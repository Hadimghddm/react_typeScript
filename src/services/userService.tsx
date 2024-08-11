// src/services/authService.ts
import axios from "axios";

const API_URL = "http://localhost:4000/api/v1.0/user";

export const findOneUser = (email: string) => {
  return axios.post(`${API_URL}/findOneUser`, { email });
};
export const findAllUsers = async (page: number, pageSize: number) => {
  try {
    const response = await axios.get(`${API_URL}/findAllUsers`, {
      params: { page, pageSize },
    });
    return response.data; // Adjust based on your API response structure
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const deleteUser = async(id: number) => {
  return axios
    .delete(`${API_URL}/delete/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error deleting user:", error);
      throw error;
    });
};

export const update = async(id: number, body: Record<any, any>) => {
  return axios
    .put(`${API_URL}/update/${id}`, body)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error updating user:", error);
      throw error;
    });
};

export const filterUsers = async (filters: Record<any, any>) => {
  try {
    const response = await axios.get(`${API_URL}/filter`, filters);
    return response.data;
  } catch (error) {
    console.error("Error filtering users:", error);
    throw error;
  }
};
export const createUser = async(body:Record<any,any>)=>{
    try {
        const response = await axios.post(`${API_URL}/createUser`,body)
        return response.data;
    }catch (error) {
        console.error("Error creating user:", error);
        throw error;
      }
}

export const assignmentRole = async(body:Record<any,any>)=>{
  try {
    const token = localStorage.getItem("token");
      const response = await axios.post(`${API_URL}/assignment`,body,{
        headers:{Authorization:`Bearer ${token}`}
      })
      return response.data;
  }catch (error) {
      console.error("Error assignment role:", error);
      throw error;
    }
}

export const updateAssignmentRole = async(body:Record<any,any>)=>{
  try {
    const token = localStorage.getItem("token");
      const response = await axios.put(`${API_URL}/updateRole`,body,{
        headers:{Authorization:`Bearer ${token}`}
      })
      return response.data;
  }catch (error) {
      console.error("Error assignment role:", error);
      throw error;
    }
}
export const userLog = async(id: number) => {
  return axios
    .get(`${API_URL}/logHistory/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error deleting user:", error);
      throw error;
    });
};