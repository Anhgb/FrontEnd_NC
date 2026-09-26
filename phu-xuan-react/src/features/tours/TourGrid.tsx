import type { Tour } from '../../data/tours';
import TourCard from './TourCard';
import './TourGrid.css';

type Props = {
  tours: Tour[];
};

/**
 * Lab 2 — Presentational: Lưới hiển thị danh sách tour.
 * Xử lý Empty State khi không có tour phù hợp.
 */
export default function TourGrid({ tours }: Props) {
  if (tours.length === 0) {
    return (
      <div className="tour-grid__empty">
        <p>😔 Không có tour nào phù hợp với bộ lọc hiện tại.</p>
      </div>
    );
  }

  return (
    <div className="tour-grid">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}
