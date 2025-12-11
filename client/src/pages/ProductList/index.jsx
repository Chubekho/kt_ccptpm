// src/components/ProductList.jsx
import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
  if (products.length === 0) {
    return <p>Không có sản phẩm nào.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Tên Sản Phẩm</th>
          <th>Giá</th>
          <th>Mô Tả</th>
          <th>Hành Động</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>{product.price.toLocaleString('vi-VN')} VNĐ</td>
            <td>{product.description.substring(0, 50)}...</td>
            <td>
              <button onClick={() => onEdit(product)}>Sửa</button>
              <button 
                onClick={() => { 
                  if (window.confirm(`Bạn có chắc chắn muốn xóa ${product.name}?`)) {
                    onDelete(product._id);
                  }
                }}
              >
                Xóa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;