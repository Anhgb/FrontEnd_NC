import { useState } from 'react';

const DS_DIA_DANH = [
  { id: 1, ten: 'Đại Nội Huế',    loai: 'Di tích',   giaVe: 200000 },
  { id: 2, ten: 'Lăng Tự Đức',    loai: 'Di tích',   giaVe: 150000 },
  { id: 3, ten: 'Chùa Thiên Mụ',  loai: 'Di tích',   giaVe: 0 },
  { id: 4, ten: 'Cầu Tràng Tiền', loai: 'Cảnh quan', giaVe: 0 },
  { id: 5, ten: 'Đồi Vọng Cảnh',  loai: 'Cảnh quan', giaVe: 0 },
  { id: 6, ten: 'Chợ Đông Ba',    loai: 'Ẩm thực',   giaVe: 0 },
];

function DongNhomLoai({ loai }) {
  return <tr><th colSpan={2}>{loai}</th></tr>;
}

function DongDiaDanh({ diaDanh }) {
  const mienPhi = diaDanh.giaVe === 0;
  return (
    <tr>
      <td className={mienPhi ? 'mien-phi' : undefined}>{diaDanh.ten}</td>
      <td>{mienPhi ? 'Miễn phí' : diaDanh.giaVe.toLocaleString('vi-VN') + ' đ'}</td>
    </tr>
  );
}

function BangDiaDanh({ dsDiaDanh, tuKhoa, chiMienPhi }) {
  const cacDong = [];
  let loaiTruoc = null;

  dsDiaDanh.forEach((dd) => {
    const khop = dd.ten.toLowerCase().includes(tuKhoa.toLowerCase());
    if (!khop) return;
    if (chiMienPhi && dd.giaVe > 0) return;
    if (dd.loai !== loaiTruoc) {
      cacDong.push(<DongNhomLoai key={dd.loai} loai={dd.loai} />);
    }
    cacDong.push(<DongDiaDanh key={dd.id} diaDanh={dd} />);
    loaiTruoc = dd.loai;
  });

  return (
    <table>
      <thead><tr><th>Địa danh</th><th>Giá vé</th></tr></thead>
      <tbody>
        {cacDong.length > 0 ? cacDong : (
          <tr><td colSpan={2}>Không tìm thấy địa danh phù hợp.</td></tr>
        )}
      </tbody>
    </table>
  );
}

// Cha chung gần nhất của ô tìm kiếm và bảng → nơi đặt state
export default function BangDiaDanhCoLoc() {
  const [tuKhoa, setTuKhoa] = useState('');
  const [chiMienPhi, setChiMienPhi] = useState(false);

  return (
    <section>
      <h2>Tra cứu địa danh</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Tìm địa danh..."
          value={tuKhoa}
          onChange={(e) => setTuKhoa(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={chiMienPhi}
            onChange={(e) => setChiMienPhi(e.target.checked)}
          />{' '}
          Chỉ hiện địa danh miễn phí vé
        </label>
      </form>
      <BangDiaDanh dsDiaDanh={DS_DIA_DANH} tuKhoa={tuKhoa} chiMienPhi={chiMienPhi} />
    </section>
  );
}
