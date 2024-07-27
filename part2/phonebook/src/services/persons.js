import axios from "axios";

const baseURL = "http://localhost:3001/persons";

function getAll() {
    return axios.get(baseURL).then(response => response.data);
}

function create(newObject) {
    return axios.post(baseURL, newObject).then(response => response.data);
}

function update(id, newObject) {
    return axios.put(`${baseURL}/${id}`, newObject).then(response => response.data);
}

function remove(id) {
    return axios.delete(`${baseURL}/${id}`).then(response => response.data);
}

const personService = { getAll, create, update, remove };

export default personService;
