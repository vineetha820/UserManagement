import axios from 'axios';

const usersApi = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
    try {
        const response = await axios.get(usersApi);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const getUserById = async (id) => {
    try {
        const response = await axios.get(`${usersApi}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        throw error;
    }
};

