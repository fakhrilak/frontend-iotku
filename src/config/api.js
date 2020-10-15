import axios from 'axios';
// Set config defaults when creating the instance
export const API = axios.create({
	baseURL: 'https://fakhrilak-iotku.herokuapp.com/iot/v1'
	//baseURL: 'http://localhost:5000/api/ts-009/'
});

export const setAuthToken = (token) => {
	if (token) {
		API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete API.defaults.headers.common['Authorization'];
	}
};