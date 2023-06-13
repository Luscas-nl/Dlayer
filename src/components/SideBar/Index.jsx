import "./Style.css"
import User from "../../assets/img/ProfilePicture.jpg"

function SideBar(props) {

    const SelectPage = (name) => {
        const buttons = document.querySelectorAll(".iconSideBarInner")
        const selected = document.querySelector("." + name)

        buttons.forEach((button) => {
            button.classList.remove("select")
        })
        selected.classList.add("select")
    }

    return(
        <div className="SideBar">
            <div className="navigateButtonsInner">
                <div className="iconSideBarInner homeSB select" onClick={(e) => SelectPage("homeSB")}>
                    <i class="fa fa-home" aria-hidden="true" />
                </div>
                <div className="iconSideBarInner trendSB" onClick={(e) => SelectPage("trendSB")}>
                    <i class="fa fa-fire" aria-hidden="true" />
                </div>
                <div className="iconSideBarInner playSB" onClick={(e) => SelectPage("playSB")}>
                    <i class="fa fa-play" aria-hidden="true" />
                </div>
                <div className="iconSideBarInner favoriteSB" onClick={(e) => SelectPage("favoriteSB")}>
                    <i class="fa fa-heart" aria-hidden="true" />
                </div>
                <div className="iconSideBarInner librarySB" onClick={(e) => SelectPage("librarySB")}>
                    <i class="fa fa-bookmark" aria-hidden="true" />
                </div>
            </div>

            <div className="userInner">
                <div className="iconSideBarInner" onClick={console.log("Saiu")}>
                    <i class="fa fa-sign-out" aria-hidden="true" />
                </div>
                <div className="imgInner">
                    <img src={User} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SideBar