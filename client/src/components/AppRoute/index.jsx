import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

import MainLayout from "@/layouts/MainLayout";
import ProductManager from "@/pages/ProductManager";

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Mặc định vào trang chủ hoặc redirect sang products */}
          <Route index element={<Navigate to="/products" replace />} />

          {/* Route chính quản lý sản phẩm */}
          <Route path="/products" element={<ProductManager />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoute;
