import '../styles/Bai7.css';
import ThuSuKien from '../components/Bai7/ThuSuKien';
import DanhSachDiaDanh from '../components/Bai7/DanhSachDiaDanh';
import KhamPhaDiaDanh from '../components/Bai7/KhamPhaDiaDanh';
import LuotThichMonAn from '../components/Bai7/LuotThichMonAn';
import TimMonAnHue from '../components/Bai7/TimMonAnHue';
import MonAnYeuThich from '../components/Bai7/MonAnYeuThich';
 
export default function Bai7Page() {
  return (
    <main className="trang-Bai7">
      <h1>Khám phá Huế — Địa danh &amp; Ẩm thực</h1>
      <ThuSuKien />
      <DanhSachDiaDanh />
      <KhamPhaDiaDanh />
      <LuotThichMonAn />
      <TimMonAnHue />
      <MonAnYeuThich />
    </main>
  );
}