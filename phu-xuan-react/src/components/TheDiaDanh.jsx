import "./TheDiaDanh.css";

function TheDiaDanh({
  anh,
  ten,
  moTa = "Chưa có thông tin mô tả cho địa danh này.",
}) {
  return (
    <div className="the-dia-danh">
      <img src={anh} alt={ten} className="the-dia-danh__anh" />
      <div className="the-dia-danh__noi-dung">
        <h3 className="the-dia-danh__ten">{ten}</h3>
        <p className="the-dia-danh__mo-ta">{moTa}</p>
      </div>
    </div>
  );
}

export default TheDiaDanh;
