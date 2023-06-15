import { createContext, useEffect, useState } from "react";
import apiClient from "../services/spotify";

export const SpotifyUserContext = createContext({})

export const SpotifyUserProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [playlists, setPlaylists] = useState(null)

    useEffect(() => {
        const storedUser = localStorage.getItem("@SpotifyUser");
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUser(userData);
            console.log(userData);
        } else {
            apiClient.get("me").then((response) => {
                const userData = response;
                localStorage.setItem("@SpotifyUser", JSON.stringify(userData));
                setUser(userData);
                console.log(userData);
            });
        }
    }, []);

    useEffect(() => {
        const storedPlaylists = localStorage.getItem("@SpotifyPlaylists");
        if(storedPlaylists){
            const playlistsData = JSON.parse(storedPlaylists);
            setPlaylists(playlistsData);
            console.log(playlistsData);
        } else {
            apiClient.get("me/playlists").then((response) => {
                const playlistsData = response
                localStorage.setItem("@SpotifyPlaylists", JSON.stringify(playlistsData))
                setPlaylists(playlistsData)
                console.log(playlistsData)
            })
        }
    }, [])

    return (
        <SpotifyUserContext.Provider
        value={{ user, playlists }}>
            {children}
        </SpotifyUserContext.Provider>
    )
}