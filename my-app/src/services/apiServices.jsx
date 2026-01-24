import axios from "../utils/axiosCustomize";

const postCreateUser = (email, username, password, role, image) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("userImage", image);
    return axios.post("api/v1/participant", formData);
}

const updateUser = (id, email, username, password, role, image) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("userImage", image);
    return axios.put(`api/v1/participant`, formData);
}

const deleteUser = (id) => {
    return axios.delete(`api/v1/participant`, { data: { id: id } });
}
const getAllUsers = () => {
    return axios.get("api/v1/participant/all");
}

const getUsersWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}

const login = (email, password) => {
    return axios.post("api/v1/login", { email, password });
}

const register = (email, username, password) => {
    return axios.post("api/v1/register", { email, username, password });
}

export { postCreateUser, getAllUsers, updateUser, deleteUser, getUsersWithPaginate, login, register };