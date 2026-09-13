import { useState } from 'react';
import { DS_DIA_DANH } from '../../data/diaDanhHue';
import TheDiaDanh from './TheDiaDanh';
 
const TAT_CA = 'Tất cả';
const CAC_LOAI = [TAT_CA, ...new Set(DS_DIA_DANH.map((dd) => dd.loai))];
 
export default function DanhSachDiaDanh() {
  const [dsDaChon, setDsDaChon] = useState([]);    // mảng id, theo thứ tự chọn
  const [loaiDangLoc, setLoaiDangLoc] = useState(TAT_CA);
 
  // Giá trị suy ra từ state — tính ngay khi render, không cần state riêng
  const dsHienThi = loaiDangLoc === TAT_CA
    ? DS_DIA_DANH
    : DS_DIA_DANH.filter((dd) => dd.loai === loaiDangLoc);
 
  // Cách 4: hàm này được truyền xuống TheDiaDanh qua prop onChon
  function handleChon(id) {
    setDsDaChon((truoc) =>
      truoc.includes(id) ? truoc.filter((x) => x !== id) : [...truoc, id]
    );
  }
 
  // Cách 3: một hàm dùng chung cho mọi nút lọc, đọc loại từ data-loai
  function handleLocLoai(e) {
    setLoaiDangLoc(e.currentTarget.dataset.loai);
  }
 
  // Chọn thêm mọi địa danh đang hiển thị, không trùng lặp
  function handleChonTatCa() {
    setDsDaChon((truoc) => {
      const moi = dsHienThi
        .map((dd) => dd.id)
        .filter((id) => !truoc.includes(id));
      return [...truoc, ...moi];
    });
  }
 
  const lichTrinh = dsDaChon
    .map((id) => DS_DIA_DANH.find((dd) => dd.id === id).ten)
    .join(' → ');
 
  return (
    <section className="lab">
      <h2>Lịch trình của bạn ({dsDaChon.length}/{DS_DIA_DANH.length})</h2>
 
      <div className="thanh-loc">
        {CAC_LOAI.map((loai) => (
          <button
            key={loai}
            data-loai={loai}
            className={loai === loaiDangLoc ? 'dang-loc' : ''}
            onClick={handleLocLoai}
          >
            {loai}
          </button>
        ))}
      </div>
 
      <div className="thanh-cong-cu">
        <button onClick={handleChonTatCa}>Chọn tất cả đang hiển thị</button>
        <button onClick={() => setDsDaChon([])} disabled={dsDaChon.length === 0}>
          Bỏ chọn
        </button>
      </div>
 
      <ul className="ds-dia-danh">
        {dsHienThi.map((dd) => (
          <TheDiaDanh
            key={dd.id}
            diaDanh={dd}
            dangChon={dsDaChon.includes(dd.id)}
            onChon={handleChon}
          />
        ))}
      </ul>
 
      <p className="lich-trinh">
        {lichTrinh ? 'Lộ trình: ' + lichTrinh : 'Chưa chọn địa danh nào.'}
      </p>
    </section>
  );
}
