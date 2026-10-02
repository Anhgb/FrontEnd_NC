import useDiaDanh from '../../hooks/useDiaDanh';
import DanhSachDiaDanh from './DanhSachDiaDanh';

// Container: biết lấy dữ liệu từ đâu, KHÔNG quan tâm hiển thị chi tiết
export default function DanhSachDiaDanhContainer({ dsYeuThich, onDoiYeuThich }) {
  const { dsDiaDanh, dangTai, loi } = useDiaDanh();

  if (dangTai) return <p>Đang tải danh sách địa danh...</p>;
  if (loi)
    return (
      <div role="status" style={{ background: '#9B2C2C', color: '#fff', padding: 12, borderRadius: 8 }}>
        Không tải được dữ liệu: {loi}
      </div>
    );

  return (
    <DanhSachDiaDanh
      dsDiaDanh={dsDiaDanh}
      dsYeuThich={dsYeuThich}
      onDoiYeuThich={onDoiYeuThich}
    />
  );
}
