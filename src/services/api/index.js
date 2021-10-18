import axios from "axios";

axios.defaults.baseURL = "http://localhost:3200/"

export const apis = {
	login: ({ email, password }) => axios.post("auth/login/admin", { email, password }),
};
