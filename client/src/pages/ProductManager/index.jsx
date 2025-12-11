// src/components/ProductManager.jsx
import { useState } from 'react';
import ProductList from '../ProductList';
// import ProductForm from './ProductForm';

const initialProduct = { name: '', price: 0, description: '' };

const ProductManager = () => {
  // Trạng thái danh sách sản phẩm
  const [products, setProducts] = useState([]);
  
  // Trạng thái sản phẩm đang được chỉnh sửa (hoặc null nếu đang Thêm mới)
  const [editingProduct, setEditingProduct] = useState(null); 
  
  // Trạng thái điều khiển việc hiển thị form (Ví dụ: Modal)
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Ví dụ hàm gọi API (Cần thay bằng axios/fetch thực tế)
  const fetchProducts = () => {
    // Gọi API GET /api/products
    setProducts([
      { _id: '1', name: 'Laptop Gaming X', price: 1500, description: '...' },
      { _id: '2', name: 'Bàn phím cơ', price: 150, description: '...' },
    ]);
  };
  
//   useEffect(() => {
//     fetchProducts();
//   }, []);

  // --- Hàm Xử lý CRUD ---

  const handleAddOrUpdate = (productData) => {
    if (editingProduct) {
      // Logic gọi API SỬA (PUT/PATCH /api/products/:id)
      console.log('Cập nhật sản phẩm:', productData);
      setEditingProduct(null); // Đóng form
    } else {
      // Logic gọi API THÊM MỚI (POST /api/products)
      console.log('Thêm mới sản phẩm:', productData);
    }
    setIsFormOpen(false); // Đóng form
    fetchProducts(); // Tải lại danh sách
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    // Logic gọi API XÓA (DELETE /api/products/:id)
    console.log('Xóa sản phẩm có ID:', id);
    fetchProducts(); // Tải lại danh sách
  };

  const handleOpenNewForm = () => {
    setEditingProduct(null); // Đảm bảo không ở chế độ chỉnh sửa
    setIsFormOpen(true);
  }

  return (
    <div>
      <h1>Quản Lý Sản Phẩm</h1>
      
      {/* Nút Thêm Mới */}
      <button onClick={handleOpenNewForm}>Thêm Sản Phẩm Mới</button>
      
      {/* Bảng Danh sách */}
      <ProductList 
        products={products} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
      
      {/* Form (Modal/Component có điều kiện hiển thị) */}
      {isFormOpen && (
        <ProductForm
          initialData={editingProduct || initialProduct}
          onSubmit={handleAddOrUpdate}
          onCancel={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductManager;