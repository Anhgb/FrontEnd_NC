import TheDiaDanhB10 from './TheDiaDanhB10';

// View: nhận dữ liệu + hàm, không biết dữ liệu đến từ đâu
export default function DanhSachDiaDanh({ dsDiaDanh, dsYeuThich, onDoiYeuThich }) {
  return (
    <div className="luoi-the">
      {dsDiaDanh.map((dd) => (
        <TheDiaDanhB10
          key={dd.id}
          diaDanh={dd}
          daThich={dsYeuThich.includes(dd.id)}
          onDoiYeuThich={onDoiYeuThich}
        />
      ))}
    </div>
  );
}
