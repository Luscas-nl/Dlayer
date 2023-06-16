import "./Style.css"

function PlaylistCard(props) {

    return(
        <div className="PlaylistCard">
            <div className="imgPlaylistInner">
                <div className="playPInner">
                    <i className="fa fa-play" />
                </div>
                <img className="imgPShadow" src={props.img} alt="" />
                <img className="imgP" src={props.img} alt="" />
            </div>
            <p className="playlistName">{props.name}</p>
            <p className="playlistSongs">{props.songs ?? "159"} Musicas</p>
        </div>
    )
}

export default PlaylistCard