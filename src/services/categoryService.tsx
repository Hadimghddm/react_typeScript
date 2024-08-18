import axios from "axios";
const API_URL = "http://localhost:4000/api/v1.0/category";

export const create = async (body: Record<any, any>) => {
    try {
      const response = await axios.post(API_URL, body,);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };
  export default create;