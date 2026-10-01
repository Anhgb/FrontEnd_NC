import { useState } from 'react';
import { tours } from '../data/tours';
import { PriceFilter } from '../features/tours/PriceFilter';
import { TourGrid } from '../features/tours/TourGrid';
import './TourListPage.css';

export function TourListPage() {
  // State giờ nằm ở cha chung — single source of truth
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);

  // Lọc tours theo khoảng giá — tính lại mỗi lần state đổi
  const filteredTours = tours.filter(
    (t) => t.price >= minPrice && t.price <= maxPrice
  );

  return (
    <main className="tour-list-page">
      <h1>Khám phá Huế qua 6 hành trình</h1>
      <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinChange={setMinPrice}
        onMaxChange={setMaxPrice}
      />
      <p className="filter-summary">
        Đang hiển thị {filteredTours.length} / {tours.length} tour
      </p>
      <TourGrid tours={filteredTours} />
    </main>
  );
}
