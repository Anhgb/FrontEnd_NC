import PageLayout from '../../components/PageLayout';
import PriceFilter from './PriceFilter';
import SearchBox from './SearchBox';
import TourGrid from './TourGrid';
import type { Tour } from '../../data/tours';
import './TourListView.css';

type Props = {
  filteredTours: Tour[];
  totalCount: number;
  minPrice: number;
  maxPrice: number;
  query: string;
  absoluteMin: number;
  absoluteMax: number;
  onMinChange: (v: number) => void;
  onMaxChange: (v: number) => void;
  onQueryChange: (v: string) => void;
};

/**
 * Lab 3 — View: Lắp ghép PageLayout với 3 khe cho module Tours.
 * Không quản lý state — nhận tất cả từ Container qua props.
 */
export default function TourListView({
  filteredTours,
  totalCount,
  minPrice,
  maxPrice,
  query,
  absoluteMin,
  absoluteMax,
  onMinChange,
  onMaxChange,
  onQueryChange,
}: Props) {
  return (
    <PageLayout
      header={
        <div className="tour-header">
          <div className="tour-header__top">
            <h1 className="tour-header__title">Danh sách Tour Huế</h1>
            <span className="tour-header__count">
              {filteredTours.length} / {totalCount} tour
            </span>
          </div>
          <SearchBox query={query} onChange={onQueryChange} />
        </div>
      }
      sidebar={
        <PriceFilter
          minPrice={minPrice}
          maxPrice={maxPrice}
          absoluteMin={absoluteMin}
          absoluteMax={absoluteMax}
          onMinChange={onMinChange}
          onMaxChange={onMaxChange}
        />
      }
      main={<TourGrid tours={filteredTours} />}
    />
  );
}
