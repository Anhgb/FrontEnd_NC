import { useState, useMemo } from 'react';
import { TOURS } from '../../data/tours';
import TourListView from './TourListView';

const ABSOLUTE_MIN = 0;
const ABSOLUTE_MAX = 1500000;

/**
 * Lab 2+3 — Container: Quản lý toàn bộ state và logic lọc.
 * State lifted lên đây; chỉ truyền dữ liệu + callback xuống View.
 */
export default function TourListContainer() {
  const [minPrice, setMinPrice] = useState(ABSOLUTE_MIN);
  const [maxPrice, setMaxPrice] = useState(ABSOLUTE_MAX);
  const [query, setQuery] = useState('');

  const filteredTours = useMemo(() => {
    return TOURS.filter((tour) => {
      const inRange = tour.price >= minPrice && tour.price <= maxPrice;
      const matchQuery = tour.name
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return inRange && matchQuery;
    });
  }, [minPrice, maxPrice, query]);

  return (
    <TourListView
      filteredTours={filteredTours}
      totalCount={TOURS.length}
      minPrice={minPrice}
      maxPrice={maxPrice}
      query={query}
      absoluteMin={ABSOLUTE_MIN}
      absoluteMax={ABSOLUTE_MAX}
      onMinChange={setMinPrice}
      onMaxChange={setMaxPrice}
      onQueryChange={setQuery}
    />
  );
}
