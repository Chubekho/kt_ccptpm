// layouts/MainLayout/index.jsx

import React from 'react';
import { Link, Outlet } from 'react-router';
// Outlet là nơi chứa các component con được định nghĩa trong Router

// --- Component Navigation Header ---
const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Quản Lý Sản Phẩm</h1>
      
      {/* Navigation Links */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Trang Chủ</Link>
        <Link to="/products" style={styles.navLink}>Quản Lý Sản Phẩm</Link>
        {/* Thêm các link khác nếu có */}
      </nav>
    </header>
  );
};

// --- Component Main Layout ---
const MainLayout = () => {
  return (
    <div style={styles.container}>
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Nội dung chính của trang (Components con) */}
      <main style={styles.mainContent}>
        {/* Outlet sẽ hiển thị component tương ứng với Route hiện tại */}
        <Outlet /> 
      </main>

      {/* 3. Footer (Tùy chọn) */}
      <footer style={styles.footer}>
        <p>&copy; 2025 Dự Án MERN Stack FE</p>
      </footer>
    </div>
  );
};

export default MainLayout;

// --- CSS cơ bản (Inline Styles cho nhanh) ---
const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
  mainContent: {
    flexGrow: 1, // Đảm bảo nội dung chiếm hết không gian còn lại
    padding: '20px',
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '10px 20px',
    textAlign: 'center',
    borderTop: '1px solid #ddd',
  }
};