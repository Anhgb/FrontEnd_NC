import { useState, useMemo, useCallback } from 'react';
import danhSachDiaDanh from '../../data/dia-danh.json';
import TheDiaDanh from './TheDiaDanh';

function DanhSachDiaDanh() {
  const [boLoc, setBoLoc] = useState('');

  // useMemo: chỉ tính lại khi boLoc đổi
  const danhSachDaLoc = useMemo(() => {
    console.log('useMemo: đang lọc danh sách địa danh theo:', boLoc);
    if (!boLoc.trim()) return danhSachDiaDanh;
    return danhSachDiaDanh.filter((dd) =>
      dd.ten.toLowerCase().includes(boLoc.toLowerCase())
    );
  }, [boLoc]);

  // useCallback: hàm themYeuThich không tạo lại mỗi lần render
  const themYeuThich = useCallback((id) => {
    console.log('Đã yêu thích địa danh id:', id);
    alert(`Đã thêm địa danh id ${id} vào danh sách yêu thích!`);
  }, []);

  return (
    <div>
      <h2>Danh sách địa danh Huế</h2>
      <input
        type="text"
        value={boLoc}
        onChange={(e) => setBoLoc(e.target.value)}
        placeholder="Lọc theo tên địa danh…"
        style={{ marginBottom: '12px', padding: '6px', width: '100%' }}
      />
      {danhSachDaLoc.map((dd) => (
        <TheDiaDanh key={dd.id} diaDanh={dd} onYeuThich={themYeuThich} />
      ))}
    </div>
  );
}

export default DanhSachDiaDanh;
