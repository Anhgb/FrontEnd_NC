import { useMemo } from 'react';
import { dinhDangGia } from '../utils';

function GioHang({ gio, dsMon }) {
  const tongTien = useMemo(() => {
    return gio.reduce((tong, itemGio) => {
      const monInfo = dsMon.find((m) => m.id === itemGio.id);
      if (!monInfo) return tong;
      return tong + monInfo.gia * itemGio.soLuong;
    }, 0);
  }, [gio, dsMon]);

  if (gio.length === 0) {
    return <div data-testid="gio-hang">Giỏ hàng trống</div>;
  }

  return (
    <div data-testid="gio-hang">
      <ul>
        {gio.map((itemGio) => {
          const monInfo = dsMon.find((m) => m.id === itemGio.id);
          if (!monInfo) return null;
          const thanhTien = monInfo.gia * itemGio.soLuong;
          return (
            <li key={itemGio.id}>
              {monInfo.ten} x {itemGio.soLuong} – {dinhDangGia(thanhTien)}
            </li>
          );
        })}
      </ul>
      <div data-testid="tong-tien">Tổng tiền: {dinhDangGia(tongTien)}</div>
    </div>
  );
}

export default GioHang;