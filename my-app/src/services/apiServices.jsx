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

const updateUser = (id, email, username, password ,  role, image) => {
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
    return axios.delete(`api/v1/participant`,{data : { id: id }});
}
const getAllUsers = () => {
    return axios.get("api/v1/participant/all");
}
export { postCreateUser , getAllUsers, updateUser , deleteUser };