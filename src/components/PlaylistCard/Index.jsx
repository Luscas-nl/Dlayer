import "./Style.css"

function PlaylistCard(props) {

    return(
        <div className="PlaylistCard">
            <div className="imgPlaylistInner">
                <img src={props.img} alt="" />
            </div>
            <p className="playlistName">{props.name}</p>
        </div>
    )
}

export default PlaylistCard