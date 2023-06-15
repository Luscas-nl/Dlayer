import axios from "axios";

const authEndPoint = "https://accounts.spotify.com/authorize";
const clientID = "6ce09b7a5f384189ad4b5407f0c86e40";
const redirectUrl = "http://netune.vercel.app";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndPoint = `${authEndPoint}?client_id=${clientID}&redirect_uri=${encodeURIComponent(
    redirectUrl
)}&scope=${encodeURIComponent(scopes.join(" "))}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1"
})

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = `Bearer ${token}`
        return config
    })
}

export default apiClient
