/**
 * Lab 5 — Bước 3: Component xem trước địa điểm sắp thêm.
 * Component thuần (pure) — không có state, chỉ nhận props và kết xuất.
 */
export default function XemTruocTheDiaDiem({ diaDiem }) {
  if (!diaDiem.ten) {
    return <p className="xem-truoc-trong">Nhập thông tin ở bên trái để xem trước…</p>;
  }

  return (
    <div className="the-dia-diem">
      <h3>{diaDiem.ten}</h3>
      {diaDiem.moTa && <p>{diaDiem.moTa}</p>}

      <ul className="chi-tiet">
        {diaDiem.phuong && (
          <li>
            <strong>Phường / xã:</strong> {diaDiem.phuong}
          </li>
        )}
        {diaDiem.giaVe !== '' && (
          <li>
            <strong>Giá vé:</strong>{' '}
            {Number(diaDiem.giaVe) === 0
              ? 'Miễn phí'
              : Number(diaDiem.giaVe).toLocaleString('vi-VN') + ' VNĐ'}
          </li>
        )}
        {diaDiem.loaiHinh && (
          <li>
            <strong>Loại hình:</strong> {diaDiem.loaiHinh}
          </li>
        )}
      </ul>
    </div>
  );
}
