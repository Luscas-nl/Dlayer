import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Index";
import Library from "../pages/Library/Index";
import SideBar from "../components/SideBar/Index";

function AppRoutes() {
    return(
        <BrowserRouter>
            <SideBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lib" element={<Library />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes