import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Index";
// import Auth from "../pages/Auth/Auth";

function AppRoutes() {


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes