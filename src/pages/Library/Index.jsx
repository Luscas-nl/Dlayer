import "./Style.css"
import { useContext } from "react"
import { SpotifyUserContext } from "../../contexts/spotifyUser"
import PlaylistCard from "../../components/PlaylistCard/Index"

function Library() {

    const { playlists } = useContext(SpotifyUserContext)
    console.log(playlists?.data.items)

    const playlistsSP = playlists?.data

    return(
        <div className="Library Page">
          <div className="libraryInner">
            {playlistsSP?.items.map((playlist) => (
              <PlaylistCard name={playlist.name} img={playlist.images[0].url} songs={playlist.tracks.total}/>
            ))}
          </div>
        </div>
    )
}

export default Library