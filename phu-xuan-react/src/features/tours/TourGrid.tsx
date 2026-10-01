import type { Tour } from '../../data/tours';
import { TourCard } from './TourCard';
import './TourGrid.css';

type TourGridProps = {
  tours: Tour[];
};

export function TourGrid({ tours }: TourGridProps) {
  return (
    <div className="tour-grid">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}
