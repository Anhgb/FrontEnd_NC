import { useState } from 'react';
import Panel from '../Panel';

const CAC_MUC = [
  { tieuDe: 'Đại Nội', noiDung: 'Hoàng thành rộng hơn 36 ha, nơi làm việc của 13 đời vua Nguyễn.' },
  { tieuDe: 'Chùa Thiên Mụ', noiDung: 'Được xây dựng năm 1601, là ngôi chùa cổ nhất Huế.' },
  { tieuDe: 'Ẩm thực Huế', noiDung: 'Bún bò, bánh bèo, bánh khoái, chè Huế — tinh tế và đậm đà.' },
];

// Thành phần cha giữ "nguồn sự thật duy nhất": panel nào đang mở
export default function GioiThieuHue() {
  const [chiSoMo, setChiSoMo] = useState(0);

  return (
    <section className="gioi-thieu-hue">
      <h2>Huế — Cố đô di sản</h2>
      {CAC_MUC.map((muc, i) => (
        <Panel
          key={muc.tieuDe}
          tieuDe={muc.tieuDe}
          dangMo={chiSoMo === i}
          onMo={() => setChiSoMo(i)}
        >
          {muc.noiDung}
        </Panel>
      ))}
    </section>
  );
}
