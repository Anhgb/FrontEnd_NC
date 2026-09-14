// Component con: chỉ hiển thị và báo sự kiện lên cha, KHÔNG giữ state "đang chọn"
export default function TheDiaDanh({ diaDanh, dangChon, onChon }) {
  return (
    <li className={'the-dia-danh' + (dangChon ? ' dang-chon' : '')}>
      <label>
        <input
          type="checkbox"
          checked={dangChon}
          onChange={() => onChon(diaDanh.id)}
        />
        <span className="ten">{diaDanh.ten}</span>
        <span className="loai">{diaDanh.loai}</span>
      </label>
    </li>
  );
}
