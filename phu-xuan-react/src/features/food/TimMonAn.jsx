import { useRef, useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import danhSachMonAn from '../../data/mon-an.json';

function TimMonAn() {
  const oTimKiemRef = useRef(null);
  const [tuKhoa, setTuKhoa] = useState('');

  // Bước 2 — đếm số lần render bằng useRef (không gây render lại)
  const soLanRenderRef = useRef(0);
  soLanRenderRef.current = soLanRenderRef.current + 1;
  console.log('TimMonAn đã render:', soLanRenderRef.current, 'lần');

  // Bước 1 — tự động focus ô tìm kiếm khi mount
  useEffect(() => {
    oTimKiemRef.current.focus();
  }, []);

  // Lab 5 — useDebounce: chỉ lọc sau khi ngừng gõ 300ms
  const tuKhoaDaTre = useDebounce(tuKhoa, 300);

  // console.log nằm NGOÀI filter — chỉ in 1 lần mỗi khi tuKhoaDaTre đổi
  console.log('Đang lọc theo từ khoá:', tuKhoaDaTre);
  const ketQuaLoc = danhSachMonAn.filter((mon) =>
    mon.ten.toLowerCase().includes(tuKhoaDaTre.toLowerCase())
  );

  // Bước 3 — hiển thị số lần render lên giao diện để quan sát
  return (
    <div>
      <h2>Tìm món ăn Huế</h2>
      <input
        ref={oTimKiemRef}
        type="text"
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)}
        placeholder="Tìm bún bò, cơm hến, bánh bèo…"
        style={{ padding: '6px', width: '100%', marginBottom: '8px' }}
      />
      <p>Đã render {soLanRenderRef.current} lần</p>
      <ul>
        {ketQuaLoc.map((mon) => (
          <li key={mon.id}>
            <strong>{mon.ten}</strong> — {mon.gia.toLocaleString()}đ
            <br />
            <small>{mon.moTa}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimMonAn;
