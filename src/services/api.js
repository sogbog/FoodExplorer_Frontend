import axios from "axios"

export const api = axios.create({
    baseURL: "https://food-explorer-j7t8.onrender.com"
})