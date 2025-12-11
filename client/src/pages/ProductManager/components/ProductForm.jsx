import React, { useState } from "react";
import styles from "../ProductManager.module.scss";

const ProductForm = ({ initialData, onSubmit, onCancel }) => {
  // Giá trị mặc định
  const defaultValues = {
    name: "",
    description: "",
    price: 0,
    quantity: 1,
    image: "",
  };

  const [formData, setFormData] = useState(initialData || defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate cơ bản: Chuyển đổi số
    const dataToSend = {
      ...formData,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
    };
    onSubmit(dataToSend);
  };

  return (
    <div className={styles.formContainer}>
      <h3>{initialData ? "Cập Nhật Sản Phẩm" : "Thêm Sản Phẩm Mới"}</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Tên sản phẩm (*)</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Giá (*)</label>
            <input
              type="number"
              name="price"
              required
              min="0"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Số lượng (*)</label>
            <input
              type="number"
              name="quantity"
              required
              min="0"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Link hình ảnh</label>
          <input
            type="text"
            name="image"
            placeholder="http://example.com/image.jpg"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Mô tả (*)</label>
          <textarea
            name="description"
            required
            rows="3"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formActions}>
          <button type="button" className={styles.btnCancel} onClick={onCancel}>
            Hủy
          </button>
          <button type="submit" className={styles.btnSubmit}>
            {initialData ? "Lưu thay đổi" : "Tạo mới"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
