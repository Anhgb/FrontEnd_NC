import { useState } from 'react';

function MenuItem({ name, price, description, isSpicy, onToggleFavorite }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggleFavorite() {
    const nextValue = !isFavorite;
    setIsFavorite(nextValue);
    onToggleFavorite(nextValue);
  }

  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Giá: <strong>{price.toLocaleString('vi-VN')}đ</strong></p>
      {isSpicy && <span className="spicy-label">🌶 Món cay</span>}
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
