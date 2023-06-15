import Back from "../../assets/img/BackgroundLogin.jpg"
import "./Style.css"
import { loginEndPoint } from "../../services/spotify"

function Auth() {
    return(
        <div className="Auth" >
            <div className="loginButtonInner" >
                <a className="buttonLogin" href={loginEndPoint}>
                    <i className="fa fa-spotify" />
                        <p>
                            Login com <span className="spotifySpan">Spotify</span>
                        </p>
                </a>
            </div>
        </div>
    )
}

export default Auth