// Thẻ địa danh — không tự giữ trạng thái "đã thích"
export default function TheDiaDanhB10({ diaDanh, daThich, onDoiYeuThich }) {
  return (
    <article className="the">
      <img src={diaDanh.anh} alt={diaDanh.ten} />
      <h3>{diaDanh.ten}</h3>
      <p>{diaDanh.moTa}</p>
      <button
        className={daThich ? 'nut-thich da-thich' : 'nut-thich'}
        onClick={() => onDoiYeuThich(diaDanh.id)}
      >
        {daThich ? 'Đã thích' : 'Yêu thích'}
      </button>
    </article>
  );
}
