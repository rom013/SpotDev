import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import ForumPage from "./pages/forum";

export default function Router() {
    return (
        <Routes>
            <Route
                element={<PrivateRoute />}
            >
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/forum/:id"
                    element={<ForumPage />}
                />
            </Route>
            <Route
                path="/login"
                element={<Login />}
            />
        </Routes>
    )
}

function PrivateRoute() {
    let auth = { token: localStorage.getItem("username") }
    return (
        auth.token
            ? (
                <>
                    <p
                        className="absolute right-2 bottom-2 text-zinc-700 z-[999] pointer-events-none"
                    >
                        by @rom013
                    </p>
                    <Outlet />
                </>
            )
            : (
                <>
                    <p
                        className="absolute right-2 bottom-2 text-zinc-700 z-[999] pointer-events-none"
                    >
                        by @rom013
                    </p>
                    <Navigate to={"/login"} />
                </>
            )
    )
}