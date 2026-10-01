import type { Tour } from '../../data/tours';
import './TourCard.css';

type TourCardProps = {
  tour: Tour;
};

export function TourCard({ tour }: TourCardProps) {
  return (
    <div className="tour-card">
      <div className="tour-card_img-wrap">
        <img src={tour.image} alt={tour.name} className="tour-card_img" />
        {tour.hot && <span className="tour-card_badge">🔥 Hot</span>}
      </div>
      <div className="tour-card_body">
        <span className="tour-card_category">{tour.category}</span>
        <h3 className="tour-card_name">{tour.name}</h3>
        <div className="tour-card_meta">
          <span className="tour-card_price">{tour.price.toLocaleString()}đ</span>
          <span className="tour-card_duration">⏱ {tour.duration} giờ</span>
        </div>
      </div>
    </div>
  );
}
