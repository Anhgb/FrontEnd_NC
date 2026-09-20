import './The.css';

/**
 * Lab 2 — Thành phần khung (wrapper) với children.
 * Props:
 *   tieuDe   — Tiêu đề ở đầu khung (tùy chọn, hiển thị có điều kiện)
 *   children — Nội dung bên trong khung
 */
export default function The({ tieuDe, children }) {
  return (
    <div className="the">
      {tieuDe && <div className="the__dau">{tieuDe}</div>}
      <div className="the__than">{children}</div>
    </div>
  );
}
