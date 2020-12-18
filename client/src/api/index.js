import axios from 'axios';

const token = sessionStorage.getItem('connexion-and-auth-imad-667');

axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});


export const getAllProjects = () => {
   return api.get('/projects');
};

export const getProject = id => {
   return api.get(`/projects/${id}`);
};

export const createProject = payload => {
   return api.post('/projects', payload);
};

export const updateProject = (id, payload) => {
   return api.put(`/projects/${id}`, payload);
};

export const deleteProject = id => {
   return api.delete(`/projects/${id}`);
};

export const authUser = payload => {
   return api.post(`/auth/login`, payload);
};

export const postMessage = payload => {
   return api.post('/messages', payload);
};

export const getMessages = () => {
   return api.get('/messages');
};

export const deleteMessage = id => {
   return api.delete(`/messages/${id}`);
};


const apis = {
    getAllProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
    authUser,
    postMessage,
    getMessages,
    deleteMessage
};

export default apis;