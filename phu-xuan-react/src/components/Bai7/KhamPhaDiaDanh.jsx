import { useState } from 'react';
import { DS_DIA_DANH } from '../../data/diaDanhHue';
import TheDiaDanhMoRong from './TheDiaDanhMoRong';
 
export default function KhamPhaDiaDanh() {
  const [idDangMo, setIdDangMo] = useState(null);
  const [dsYeuThich, setDsYeuThich] = useState([]);
  const [soTuongTac, setSoTuongTac] = useState(0);
 
  // Bấm lại thẻ đang mở thì đóng lại
  function handleXem(id) {
    setIdDangMo((truoc) => (truoc === id ? null : id));
  }
 
  function handleYeuThich(id) {
    setDsYeuThich((truoc) =>
      truoc.includes(id) ? truoc.filter((x) => x !== id) : [...truoc, id]
    );
  }
 
  return (
    // Pha bắt: đếm MỌI cú bấm trong khu vực, kể cả khi thẻ con đã stopPropagation
    <section className="lab" onClickCapture={() => setSoTuongTac((t) => t + 1)}>
      <h2>Khám phá địa danh</h2>
      <p className="thong-ke">
        Số lượt tương tác: {soTuongTac} · Yêu thích: {dsYeuThich.length}
      </p>
      <div className="luoi-the">
        {DS_DIA_DANH.map((dd) => (
          <TheDiaDanhMoRong
            key={dd.id}
            diaDanh={dd}
            dangMo={dd.id === idDangMo}
            laYeuThich={dsYeuThich.includes(dd.id)}
            onXem={handleXem}
            onYeuThich={handleYeuThich}
          />
        ))}
      </div>
    </section>
  );
}
