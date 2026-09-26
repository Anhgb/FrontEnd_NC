import type { Tour } from '../../data/tours';
import './TourCard.css';

type Props = {
  tour: Tour;
};

/**
 * Lab 2 — Presentational: Thẻ hiển thị thông tin một tour.
 * Không chứa state, chỉ nhận props và kết xuất UI.
 */
export default function TourCard({ tour }: Props) {
  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(tour.price);

  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.name} className="tour-card__img" />
      <div className="tour-card__body">
        <h3 className="tour-card__name">{tour.name}</h3>
        <p className="tour-card__desc">{tour.description}</p>
        <div className="tour-card__meta">
          <span className="tour-card__price">{formattedPrice}</span>
          <span className="tour-card__duration">⏱ {tour.duration}</span>
        </div>
      </div>
    </div>
  );
}
