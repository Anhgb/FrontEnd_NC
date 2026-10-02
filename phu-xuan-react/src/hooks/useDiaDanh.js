import { useEffect, useState } from 'react';

// Hook tùy biến: gói toàn bộ logic tải dữ liệu, trả về 3 trạng thái
export default function useDiaDanh(duongDan = '/du-lieu/dia-danh.json') {
  const [dsDiaDanh, setDsDiaDanh] = useState([]);
  const [dangTai, setDangTai] = useState(true);
  const [loi, setLoi] = useState(null);

  useEffect(() => {
    let daHuy = false; // chặn cập nhật state sau khi thành phần đã gỡ

    async function taiDuLieu() {
      try {
        setDangTai(true);
        const phanHoi = await fetch(duongDan);
        if (!phanHoi.ok) throw new Error('Máy chủ trả về mã ' + phanHoi.status);
        const duLieu = await phanHoi.json();
        if (!daHuy) setDsDiaDanh(duLieu);
      } catch (e) {
        if (!daHuy) setLoi(e.message);
      } finally {
        if (!daHuy) setDangTai(false);
      }
    }

    taiDuLieu();
    return () => { daHuy = true; };
  }, [duongDan]);

  return { dsDiaDanh, dangTai, loi };
}
