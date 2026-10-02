import { useState } from 'react';

const DS_DIA_DANH = [
  { id: 1, ten: 'Đại Nội Huế' },
  { id: 2, ten: 'Lăng Tự Đức' },
  { id: 3, ten: 'Chùa Thiên Mụ' },
  { id: 4, ten: 'Cầu Tràng Tiền' },
  { id: 5, ten: 'Đồi Vọng Cảnh' },
  { id: 6, ten: 'Chợ Đông Ba' },
];

function FormBinhLuan({ tenDiaDanh, onGui }) {
  const [banNhap, setBanNhap] = useState('');

  function xuLyGui(e) {
    e.preventDefault();
    if (banNhap.trim() === '') return;
    onGui(banNhap.trim());
    setBanNhap('');
  }

  return (
    <form onSubmit={xuLyGui}>
      <label htmlFor="binh-luan">Cảm nhận về {tenDiaDanh}</label>
      <textarea
        id="binh-luan"
        value={banNhap}
        onChange={(e) => setBanNhap(e.target.value)}
      />
      <button type="submit">Gửi</button>
    </form>
  );
}

export default function GocCamNhan() {
  const [idDangChon, setIdDangChon] = useState(DS_DIA_DANH[0].id);
  // Bình luận của MỌI địa danh: { [id]: ['...', '...'] }
  const [binhLuan, setBinhLuan] = useState({});

  const diaDanh = DS_DIA_DANH.find((dd) => dd.id === idDangChon);
  const dsBinhLuan = binhLuan[idDangChon] ?? []; // dẫn xuất, không lưu riêng

  function themBinhLuan(noiDung) {
    setBinhLuan({ ...binhLuan, [idDangChon]: [...dsBinhLuan, noiDung] });
  }

  return (
    <section>
      <h2>Góc cảm nhận</h2>
      <select value={idDangChon} onChange={(e) => setIdDangChon(Number(e.target.value))}>
        {DS_DIA_DANH.map((dd) => (
          <option key={dd.id} value={dd.id}>{dd.ten}</option>
        ))}
      </select>
      <p>{dsBinhLuan.length} cảm nhận</p>
      <ul>{dsBinhLuan.map((bl, i) => <li key={i}>{bl}</li>)}</ul>
      {/* key thay đổi → React gỡ form cũ, dựng form mới → bản nháp được đặt lại */}
      <FormBinhLuan key={idDangChon} tenDiaDanh={diaDanh.ten} onGui={themBinhLuan} />
    </section>
  );
}
