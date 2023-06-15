import AppRoutes from './routes/routes'
import SideBar from './components/SideBar/Index'
import './App.css'
import Auth from './pages/Auth/Index'
import { useEffect, useState } from 'react'
import { setClientToken } from './services/spotify'
import { SpotifyUserProvider } from './contexts/spotifyUser'

function App() {

  const [token, setToken] = useState("")

    useEffect(() => {
      const token = window.localStorage.getItem("@SpotifyToken")
      const hash = window.location.hash
      window.location.hash = ""
      if(!token && hash){
        const _token = hash.split("&")[0].split("=")[1]
        window.localStorage.setItem("@SpotifyToken", _token)
        setToken(_token)
        setClientToken(_token)
      } else {
        setToken(token)
        setClientToken(token)
      }
    }, [])


  return !token ? (
    <Auth />
  ) : (
    <div className="App">
      <SpotifyUserProvider>
        <AppRoutes />
      </SpotifyUserProvider>
    </div>
  )
}

export default App
