import { dinhDangGia } from '../utils';

function MonAnCard({ mon, dangChon, onChon, onDat }) {
  function handleDatMon(e) {
    e.stopPropagation();
    onDat(mon.id);
  }

  return (
    <article
      className={dangChon ? 'dang-chon' : ''}
      onClick={() => onChon(mon.id)}
    >
      <h3>{mon.ten}</h3>
      <p>{mon.moTa}</p>
      <p>Giá: <strong>{dinhDangGia(mon.gia)}</strong></p>
      {mon.daHet && <span className="het-mon">Hết món</span>}
      <button onClick={handleDatMon} disabled={mon.daHet}>
        Đặt món
      </button>
    </article>
  );
}

export default MonAnCard;