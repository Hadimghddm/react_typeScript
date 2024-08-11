import axios from "axios";

const API_URL = "http://localhost:4000/api/v1.0/role/";

export const getRoles = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error;
  }
};
export const getRole = async (id:number) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error;
  }
};

export const update = async (id: number, body: Record<any, any>) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.put(`${API_URL}/${id}`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Update successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error;
  }
};
export const deleteRole = async (id: number) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("delete successful", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
export const createRole = async (body: Record<any, any>) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(API_URL, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
