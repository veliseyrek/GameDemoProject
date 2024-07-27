import axios from 'axios';

 const API_URL = 'https://veliseyrek-001-site1.ktempurl.com/api';

//const API_URL = 'http://localhost:5022/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic MTExODc5Njg6NjAtZGF5ZnJlZXRyaWFs'
  }
});

export const login = async (username, password) => {
    debugger;


    // const axios = require('axios');
    // let data = JSON.stringify({
    //   "username": username,
    //   "password": password
    // });
    
    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'http://veliseyrek-001-site1.ktempurl.com/api/login',
    //   headers: { 
    //     'Accept': 'application/json, text/plain, */*', 
    //     'Referer': 'http://localhost:3000/', 
    //     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 
    //     'Content-Type': 'application/json', 
    //     'Authorization': 'Basic MTExODc5Njg6NjAtZGF5ZnJlZXRyaWFs'
    //   },
    //   data : data
    // };
    
    // axios.request(config)
    // .then((response) => {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    



    // const response = await fetch('http://veliseyrek-001-site1.ktempurl.com/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Basic MTExODc5Njg6NjAtZGF5ZnJlZXRyaWFs' // `username` ve `password` yerine kendi değerlerinizi girin
    //   },
    //   body: JSON.stringify({
    //     // Gönderilmesi gereken veri
    //   }),
    // });
    // const data = await response.json();


  try {

    const response = await api.post('/login', { username, password });

    if (response.data && response.data.token) {
      return response.data;
    } else {
      throw new Error('No token received');
    }
    //return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await api.post('/register', { username, email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getConfigurations = async () => {
  try {
    const response = await api.get('/configurations');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addConfiguration = async (config) => {
  try {
    const response = await api.post('/configurations', config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteConfiguration = async (id) => {
  try {
    const response = await api.delete(`/configurations/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

