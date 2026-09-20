/**
 * Lab 3 — Phần B: Render Props pattern.
 * Props:
 *   cacMuc     — Mảng dữ liệu cần hiển thị
 *   hienThiMuc — Hàm (render prop): nhận từng phần tử, trả về JSX
 */
export default function DanhSach({ cacMuc, hienThiMuc }) {
  if (!cacMuc || cacMuc.length === 0) {
    return <p style={{ color: '#a0aec0', fontStyle: 'italic' }}>Không có dữ liệu.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {cacMuc.map((muc) => (
        <li key={muc.id} style={{ marginBottom: '0.5rem' }}>
          {hienThiMuc(muc)}
        </li>
      ))}
    </ul>
  );
}
