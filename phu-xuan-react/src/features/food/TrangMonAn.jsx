import { useState } from 'react';
import ChiTietMonAn from './chiTietMonAn';
 
function TrangMonAn() {
  const [idDangChon, setIdDangChon] = useState(1);
 
  return (
    <div>
      <button onClick={() => setIdDangChon(1)}>Bún bò Huế</button>
      <button onClick={() => setIdDangChon(2)}>Cơm hến</button>
      <button onClick={() => setIdDangChon(3)}>Bánh bèo</button>
      <button onClick={() => setIdDangChon(4)}>Nem lụi</button>
      <ChiTietMonAn idMonAn={idDangChon} />
    </div>
  );
}
 
export default TrangMonAn;

