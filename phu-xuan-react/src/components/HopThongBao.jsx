import './HopThongBao.css';

/**
 * Lab 4 — Thành phần thông báo tổng quát.
 * Props:
 *   children    — Nội dung thông báo
 *   mauNen      — Màu nền (mặc định: xanh dương nhạt)
 *   mauVienTren — Màu viền trên (mặc định: xanh dương)
 */
export default function HopThongBao({
  children,
  mauNen = '#ebf8ff',
  mauVienTren = '#63b3ed',
}) {
  return (
    <div
      className="hop-thong-bao"
      style={{ backgroundColor: mauNen, borderTop: `4px solid ${mauVienTren}` }}
    >
      {children}
    </div>
  );
}

/**
 * Lab 4 — Chuyên biệt hóa (Specialization) qua kết hợp (Composition).
 * HopThongBaoThanhCong dùng HopThongBao với màu xanh lá cố định.
 */
export function HopThongBaoThanhCong({ children }) {
  return (
    <HopThongBao mauNen="#f0fff4" mauVienTren="#48bb78">
      <span className="hop-thong-bao__bieu-tuong">✅ </span>
      {children}
    </HopThongBao>
  );
}
