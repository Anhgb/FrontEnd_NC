import { memo } from 'react';

// React.memo bọc component con để tránh render thừa
const TheDiaDanh = memo(function TheDiaDanh({ diaDanh, onYeuThich }) {
  console.log('TheDiaDanh render:', diaDanh.ten);

  return (
    <div className="the-dia-danh">
      <strong>{diaDanh.ten}</strong>
      <span> — {diaDanh.khuVuc}</span>
      <button onClick={() => onYeuThich(diaDanh.id)}>❤️ Yêu thích</button>
    </div>
  );
});

export default TheDiaDanh;
