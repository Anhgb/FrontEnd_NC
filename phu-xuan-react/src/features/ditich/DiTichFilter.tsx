import type { DiTichFilter, LoaiDiTich } from './types';
import './DiTichFilter.css';

type Props = {
  boLoc: DiTichFilter;
  onCapNhat: (partial: Partial<DiTichFilter>) => void;
  onReset: () => void;
};

const LOAI_OPTIONS: { value: LoaiDiTich; label: string }[] = [
  { value: 'tat-ca', label: 'Tất cả' },
  { value: 'cung-dien', label: 'Cung điện' },
  { value: 'lang-tam', label: 'Lăng tẩm' },
  { value: 'chua', label: 'Chùa' },
  { value: 'cong-trinh', label: 'Công trình' },
];

/**
 * Lab 4 — Presentational: Bộ lọc di tích (select loại + checkbox + reset).
 */
export default function DiTichFilterPanel({ boLoc, onCapNhat, onReset }: Props) {
  return (
    <div className="ditich-filter">
      <h4 className="ditich-filter__title">Bộ lọc</h4>

      <label className="ditich-filter__label">Loại di tích</label>
      <select
        className="ditich-filter__select"
        value={boLoc.loai}
        onChange={(e) => onCapNhat({ loai: e.target.value as LoaiDiTich })}
      >
        {LOAI_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <label className="ditich-filter__checkbox-label">
        <input
          type="checkbox"
          checked={boLoc.chiChuaThamQuan}
          onChange={(e) => onCapNhat({ chiChuaThamQuan: e.target.checked })}
        />
        Chỉ hiện nơi chưa tham quan
      </label>

      <button className="ditich-filter__reset" onClick={onReset}>
        Đặt lại bộ lọc
      </button>
    </div>
  );
}
