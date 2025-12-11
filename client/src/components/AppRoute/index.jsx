import { BrowserRouter as Router, Routes, Route } from "react-router";


import MainLayout from "@/layouts/MainLayout";
import ProductList from "@/pages/ProductList";
import ProductManager from "@/pages/ProductManager";

function AppRoute() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<ProductList/>}/>
                    <Route path="" element={<ProductManager/>}/>
                    <Route path="" element/>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoute;