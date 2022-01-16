import axios from "axios";

import baseUrl from "../Config/urls";

export const axiosService = axios.create({
    baseURL:baseUrl
})