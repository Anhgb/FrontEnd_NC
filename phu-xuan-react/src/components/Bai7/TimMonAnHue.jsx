import { useState } from 'react';
import { DS_MON_AN } from '../../data/monAnHue';
import FormTimMonAn from './FormTimMonAn';
 
// So khớp không phân biệt hoa thường
function khop(ten, tuKhoa) {
  return ten.toLowerCase().includes(tuKhoa.toLowerCase());
}
 
export default function TimMonAnHue() {
  const [tuKhoaDaTim, setTuKhoaDaTim] = useState('');
 
  const ketQua = tuKhoaDaTim
    ? DS_MON_AN.filter((mon) => khop(mon.ten, tuKhoaDaTim))
    : DS_MON_AN;
 
  return (
    <section className="lab">
      <h2>Tìm món ăn Huế</h2>
      <FormTimMonAn onTimKiem={setTuKhoaDaTim} />
      <p className="thong-ke">
        {tuKhoaDaTim
          ? 'Tìm thấy ' + ketQua.length + ' món cho "' + tuKhoaDaTim + '"'
          : 'Đang hiển thị toàn bộ ' + DS_MON_AN.length + ' món'}
      </p>
      <ul className="ds-mon">
        {ketQua.map((mon) => (
          <li key={mon.id}>
            {mon.ten} <small>{mon.gia.toLocaleString('vi-VN')} đ</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
