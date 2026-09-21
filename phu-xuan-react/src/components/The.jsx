import "./The.css";

function The({ tieuDe, children }) {
  return (
    <div className="the-khung">
      {tieuDe && <div className="the-khung__tieu-de">{tieuDe}</div>}
      <div className="the-khung__than">{children}</div>
    </div>
  );
}

export default The;
