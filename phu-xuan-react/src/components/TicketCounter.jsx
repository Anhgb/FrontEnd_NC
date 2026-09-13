// Lab 5 — Bộ đếm số lượng vé tham quan
import { useState } from 'react';

function TicketCounter({ price }) {
  const [quantity, setQuantity] = useState(1);

  function handleDecrease() {
    setQuantity((prev) => Math.max(1, prev - 1));
  }

  function handleIncrease() {
    setQuantity((prev) => Math.min(10, prev + 1));
  }

  const totalPrice = price * quantity;

  return (
    <div className="ticket-counter">
      <p className="ticket-counter__label">🎫 Đặt vé tham quan</p>
      <div className="ticket-counter__controls">
        <button onClick={handleDecrease}>−</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <p className="ticket-counter__total">
        Tổng tiền: <strong>{totalPrice.toLocaleString('vi-VN')} đ</strong>
      </p>
    </div>
  );
}

export default TicketCounter;
