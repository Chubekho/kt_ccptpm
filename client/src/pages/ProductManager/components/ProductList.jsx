import React from 'react';
import styles from '../ProductManager.module.scss'; // Dùng chung styles hoặc tách riêng tuỳ bạn

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Mô tả</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? products.map((item) => (
            <tr key={item._id}>
              <td>
                <img 
                  src={item.image || 'https://via.placeholder.com/50'} 
                  alt={item.name} 
                  className={styles.thumb}
                />
              </td>
              <td>{item.name}</td>
              <td className={styles.price}>{item.price.toLocaleString()} đ</td>
              <td>{item.quantity}</td>
              <td title={item.description}>
                {item.description.length > 30 ? item.description.substring(0, 30) + '...' : item.description}
              </td>
              <td>
                <button className={styles.btnEdit} onClick={() => onEdit(item)}>Sửa</button>
                <button 
                  className={styles.btnDelete}
                  onClick={() => {
                     if(window.confirm('Bạn có chắc muốn xóa?')) onDelete(item._id)
                  }}
                >
                  Xóa
                </button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="6" style={{textAlign: 'center'}}>Chưa có sản phẩm nào</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;