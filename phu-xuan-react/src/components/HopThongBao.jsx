function HopThongBao({
  children,
  mauNen = "#e6f0ef",
  mauVienTren = "#2cb67d",
}) {
  return (
    <div
      style={{
        backgroundColor: mauNen,
        borderTop: `4px solid ${mauVienTren}`,
        borderRadius: "6px",
        padding: "12px 16px",
        marginBottom: "16px",
      }}
    >
      {children}
    </div>
  );
}

function HopThongBaoThanhCong({ children }) {
  return (
    <HopThongBao mauNen="#e7f3ec" mauVienTren="#1e7a46">
      <strong style={{ color: "#1e7a46" }}>Thành công! </strong>
      {children}
    </HopThongBao>
  );
}

export { HopThongBaoThanhCong };
export default HopThongBao;
