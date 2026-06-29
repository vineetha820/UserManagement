import axios from "axios";
const users_api = "https://jsonplaceholder.typicode.com/users";

export const getusers=async()=>{
    try{
        const response = await axios.get(users_api);
        return response.data;
    }catch(error){
        console.error("Error fetching users:", error);
        throw error;
    }

}
export const getuserbyid=async(id)=>{
    try{
        const response = await axios.get(`${users_api}/${id}`);

        return response.data;
    }
    catch(error){
        console.error("Error fetching user by ID:", error);
        throw error;
    }
}

