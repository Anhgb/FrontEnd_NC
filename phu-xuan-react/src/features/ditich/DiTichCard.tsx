import type { DiTich } from './types';
import './DiTichCard.css';

type Props = {
  diTich: DiTich;
  onToggleThamQuan: (id: number) => void;
};

/**
 * Lab 4 — Presentational: Thẻ hiển thị di tích.
 * Đổi style khi đã tham quan (.ditich-card--visited).
 */
export function DiTichCard({ diTich, onToggleThamQuan }: Props) {
  return (
    <div
      className={`ditich-card${diTich.daThamQuan ? ' ditich-card--visited' : ''}`}
    >
      <img src={diTich.anh} alt={diTich.ten} className="ditich-card__img" />
      <div className="ditich-card__body">
        <h3 className="ditich-card__ten">{diTich.ten}</h3>
        <p className="ditich-card__mo-ta">{diTich.moTa}</p>
        <button
          className="ditich-card__btn"
          onClick={() => onToggleThamQuan(diTich.id)}
        >
          {diTich.daThamQuan ? '✓ Đã tham quan' : 'Đánh dấu đã tham quan'}
        </button>
      </div>
    </div>
  );
}
