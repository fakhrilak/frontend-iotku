import axios from 'axios';
// Set config defaults when creating the instance
export const API = axios.create({
	baseURL: 'https://fakhrilak-iotku.herokuapp.com/iot/v1'
	//baseURL: 'http://localhost:5000/api/ts-009/'
});