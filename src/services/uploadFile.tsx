import axios from "axios";

const API_URL = "http://localhost:4000/api/v1.0/file";

export const UploadFile = (body: FormData) => {
  const token = localStorage.getItem("token");

  return axios.post(API_URL, body, {
    headers: {
      Authorization: "Bearer " + token,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const Files = async ()=>{
    try {
        const api =`${API_URL}/all/`
        console.log(api)
        const response =await axios.get(`${API_URL}/all/`)
        return response.data;
    } catch (error) {
        console.error("Error get files:", error);
    throw error;
    }
   
}

