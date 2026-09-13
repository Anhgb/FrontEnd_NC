// Lab 4 — Đánh giá bằng sao
import { useState } from 'react';

function StarRating() {
  const [userRating, setUserRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating">
      {stars.map((starValue) => (
        <span
          key={starValue}
          className={`star ${starValue <= userRating ? 'star--active' : ''}`}
          onClick={() => setUserRating(starValue)}
        >
          {starValue <= userRating ? '★' : '☆'}
        </span>
      ))}
      <p>Bạn đã đánh giá: {userRating}/5 sao</p>
    </div>
  );
}

export default StarRating;
