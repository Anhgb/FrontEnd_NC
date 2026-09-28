import { PageLayout } from '../../components/PageLayout';
import { SearchBox } from '../tours/SearchBox';
import { DiTichCard } from './DiTichCard';
import { DiTichFilterPanel } from './DiTichFilter';
import { useDiTichList } from './useDiTichList';
import './DiTichListView.css';

/**
 * Lab 4 — View: Dùng trực tiếp custom hook useDiTichList.
 * Không cần Container riêng — hook đóng vai trò quản lý state.
 */
export function DiTichListView() {
  const {
    danhSachHienThi,
    totalCount,
    boLoc,
    capNhatBoLoc,
    danhDauDaThamQuan,
    resetBoLoc,
  } = useDiTichList();

  return (
    <PageLayout
      header={
        <div className="ditich-header">
          <div className="ditich-header__top">
            <h1 className="ditich-header__title">Di tích Huế</h1>
            <span className="ditich-header__count">
              {danhSachHienThi.length} / {totalCount} di tích
            </span>
          </div>
          <SearchBox
            value={boLoc.tuKhoa}
            onChange={(v) => capNhatBoLoc({ tuKhoa: v })}
            placeholder="Tìm tên di tích..."
          />
        </div>
      }
      sidebar={
        <DiTichFilterPanel
          boLoc={boLoc}
          onCapNhat={capNhatBoLoc}
          onReset={resetBoLoc}
        />
      }
      main={
        <div className="ditich-grid">
          {danhSachHienThi.length === 0 ? (
            <p className="ditich-grid__empty">
              😔 Không có di tích nào phù hợp với bộ lọc hiện tại.
            </p>
          ) : (
            danhSachHienThi.map((dt) => (
              <DiTichCard
                key={dt.id}
                diTich={dt}
                onToggleThamQuan={danhDauDaThamQuan}
              />
            ))
          )}
        </div>
      }
    />
  );
}
