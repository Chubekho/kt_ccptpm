import { BrowserRouter as Router, Routes, Route } from "react-router";


import MainLayout from "@/layouts/MainLayout";

function AppRoute() {
    return (
        <Router>
            <Routes>
                <Route index element={<MainLayout />}>

                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoute;