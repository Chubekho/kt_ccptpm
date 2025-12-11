import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import styles from './ProductManager.module.scss'; // Import SCSS module

const API_URL = 'http://localhost:8082/api/product'; // Đảm bảo bạn đã config proxy trong vite.config.js hoặc dùng http://localhost:PORT/api/product

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // State cho Form (Modal)
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null); // null = mode thêm mới

  // --- 1. GET: Lấy danh sách sản phẩm ---
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      
      // Giả sử API trả về mảng trực tiếp hoặc data.data
      setProducts(Array.isArray(data) ? data : []); 
    } catch (error) {
      console.error("Lỗi tải sản phẩm:", error);
      alert("Không thể tải danh sách sản phẩm");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // --- 2. DELETE: Xóa sản phẩm ---
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (res.ok) {
        alert("Xóa thành công!");
        fetchProducts(); // Tải lại danh sách
      } else {
        alert("Xóa thất bại");
      }
    } catch (error) {
      console.error("Lỗi xóa:", error);
    }
  };

  // --- 3. CREATE & UPDATE: Xử lý Submit Form ---
  const handleFormSubmit = async (formData) => {
    try {
      let url = API_URL;
      let method = 'POST';

      if (editingProduct) {
        // Mode Sửa
        url = `${API_URL}/${editingProduct._id}`;
        method = 'PUT';
      }

      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert(editingProduct ? "Cập nhật thành công!" : "Thêm mới thành công!");
        setIsFormOpen(false);
        setEditingProduct(null);
        fetchProducts(); // Tải lại danh sách
      } else {
        const errData = await res.json();
        alert(`Lỗi: ${errData.message || 'Thao tác thất bại'}`);
      }
    } catch (error) {
      console.error("Lỗi submit:", error);
    }
  };

  // --- Điều khiển mở Form ---
  const openAddForm = () => {
    setEditingProduct(null);
    setIsFormOpen(true);
  };

  const openEditForm = (product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Quản Lý Sản Phẩm</h2>
        <button className={styles.addButton} onClick={openAddForm}>
          + Thêm Sản Phẩm
        </button>
      </div>

      {isLoading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <ProductList 
          products={products} 
          onEdit={openEditForm} 
          onDelete={handleDelete} 
        />
      )}

      {/* Hiển thị Form nếu isFormOpen = true */}
      {isFormOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <ProductForm 
              initialData={editingProduct} 
              onSubmit={handleFormSubmit}
              onCancel={() => setIsFormOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManager;