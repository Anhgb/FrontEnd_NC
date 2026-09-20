import './TheDiaDanh.css';

/**
 * Lab 1 — Thẻ địa danh tái sử dụng.
 * Props:
 *   anh   — URL ảnh đại diện
 *   ten   — Tên địa danh
 *   moTa  — Mô tả ngắn (mặc định nếu bỏ trống)
 */
export default function TheDiaDanh({ anh, ten, moTa = 'Đang cập nhật mô tả...' }) {
  return (
    <div className="the-dia-danh">
      <img src={anh} alt={ten} className="the-dia-danh__anh" />
      <div className="the-dia-danh__noi-dung">
        <h3 className="the-dia-danh__ten">{ten}</h3>
        <p className="the-dia-danh__mo-ta">{moTa}</p>
      </div>
    </div>
  );
}
