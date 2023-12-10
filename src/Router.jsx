import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

export default function Controller() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  
                    element={<PrivateRoute/>}
                >
                    <Route
                        path="/"
                        element={<Home />}
                    />
                </Route>
                <Route
                    path="/login"
                    element={<Login />}
                />
            </Routes>
        </BrowserRouter>
    )
}

function PrivateRoute(){
    let auth = {token: localStorage.getItem("username")}
    return(
        auth.token ? <Outlet/> : <Navigate to={"/login"} />
    )
}