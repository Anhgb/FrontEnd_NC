import './BoCucTrang.css';

/**
 * Lab 3 — Phần A: Thành phần bố cục 3 khe JSX (JSX Slots).
 * Props:
 *   thanhDieuHuong — JSX hiển thị trong <header>
 *   noiDungChinh   — JSX hiển thị trong <main>
 *   chanTrang      — JSX hiển thị trong <footer>
 */
export default function BoCucTrang({ thanhDieuHuong, noiDungChinh, chanTrang }) {
  return (
    <div className="bo-cuc-trang">
      <header className="bo-cuc-trang__header">{thanhDieuHuong}</header>
      <main className="bo-cuc-trang__main">{noiDungChinh}</main>
      <footer className="bo-cuc-trang__footer">{chanTrang}</footer>
    </div>
  );
}
