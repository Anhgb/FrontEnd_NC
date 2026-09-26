import './PriceFilter.css';

type Props = {
  minPrice: number;
  maxPrice: number;
  absoluteMin: number;
  absoluteMax: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
};

const fmt = (n: number) => new Intl.NumberFormat('vi-VN').format(n) + ' đ';

/**
 * Lab 2 — Presentational: Bộ lọc khoảng giá min-max.
 * Không có state nội bộ — nhận giá trị và callback từ Container.
 */
export default function PriceFilter({
  minPrice,
  maxPrice,
  absoluteMin,
  absoluteMax,
  onMinChange,
  onMaxChange,
}: Props) {
  return (
    <div className="price-filter">
      <h4 className="price-filter__title">Lọc theo giá</h4>

      <div className="price-filter__group">
        <label className="price-filter__label">
          Tối thiểu: <strong>{fmt(minPrice)}</strong>
        </label>
        <input
          type="range"
          min={absoluteMin}
          max={absoluteMax}
          step={50000}
          value={minPrice}
          onChange={(e) => onMinChange(Number(e.target.value))}
          className="price-filter__range"
        />
      </div>

      <div className="price-filter__group">
        <label className="price-filter__label">
          Tối đa: <strong>{fmt(maxPrice)}</strong>
        </label>
        <input
          type="range"
          min={absoluteMin}
          max={absoluteMax}
          step={50000}
          value={maxPrice}
          onChange={(e) => onMaxChange(Number(e.target.value))}
          className="price-filter__range"
        />
      </div>
    </div>
  );
}
