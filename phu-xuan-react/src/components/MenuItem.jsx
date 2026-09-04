import { useState } from 'react';

// Câu 2, 3, 5 — MenuItem nhận 4 props + state isFavorite + callback onToggleFavorite
function MenuItem({ name, price, description, isSpicy, onToggleFavorite }) {
  // Câu 5 — state isFavorite cục bộ của từng món
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggleFavorite() {
    const nextValue = !isFavorite;
    setIsFavorite(nextValue);
    // Câu 6 — gọi callback truyền từ App để cập nhật state đếm ở cha
    onToggleFavorite(nextValue);
  }

  return (
    <div className="menu-item">
      {/* Câu 2 — hiển thị tên, mô tả, giá định dạng */}
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Giá: <strong>{price.toLocaleString('vi-VN')}đ</strong></p>

      {/* Câu 3 — hiển thị nhãn "🌶 Món cay" chỉ khi isSpicy === true */}
      {isSpicy && <span className="spicy-label">🌶 Món cay</span>}

      {/* Câu 5 — nút toggle yêu thích, giao diện thay đổi theo trạng thái */}
      <button
        className="favorite-btn"
        onClick={handleToggleFavorite}
        style={{ color: isFavorite ? '#e91818' : '#555555' }}
      >
        {isFavorite ? '♥ Đã yêu thích' : '♡ Yêu thích'}
      </button>
    </div>
  );
}

export default MenuItem;
