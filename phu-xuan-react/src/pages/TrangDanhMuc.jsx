import BoCucTrang from "../components/BoCucTrang";
import The from "../components/The";
import TheDiaDanh from "../components/TheDiaDanh";
import DanhSach from "../components/DanhSach";
import HopThongBao, {
  HopThongBaoThanhCong,
} from "../components/HopThongBao";
import { DANH_SACH_DIA_DANH } from "../du-lieu/diaDanh";
import { DANH_SACH_MON_AN } from "../du-lieu/monAn";

function TrangDanhMuc() {
  const soLuong = DANH_SACH_DIA_DANH.length;

  return (
    <BoCucTrang
      thanhDieuHuong={
        <nav>
          <strong>Khám phá Huế</strong>
        </nav>
      }
      noiDungChinh={
        <>
          <HopThongBaoThanhCong>
            Đã tải thành công dữ liệu trang danh mục.
          </HopThongBaoThanhCong>

          <HopThongBao>
            Hiện có <strong>{soLuong}</strong> địa danh trong danh mục.
          </HopThongBao>

          <The tieuDe="Di tích tiêu biểu">
            <div className="luoi-dia-danh">
              {DANH_SACH_DIA_DANH.map((dd) => (
                <TheDiaDanh
                  key={dd.id}
                  anh={dd.anh}
                  ten={dd.ten}
                  moTa={dd.moTa}
                />
              ))}
            </div>
          </The>

          <The tieuDe="Ẩm thực Huế">
            <p>Kiểu 1 — Tên và giá:</p>
            <DanhSach
              cacMuc={DANH_SACH_MON_AN}
              hienThiMuc={(mon) => (
                <span>
                  <strong>{mon.ten}</strong> — {mon.gia.toLocaleString("vi-VN")} đ
                </span>
              )}
            />

            <hr style={{ margin: "12px 0", borderColor: "#cbd2d9" }} />

            <p>Kiểu 2 — Có nút đặt món:</p>
            <DanhSach
              cacMuc={DANH_SACH_MON_AN}
              hienThiMuc={(mon) => (
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {mon.ten}
                  <button onClick={() => alert(`Đã đặt: ${mon.ten}`)}>
                    Đặt món
                  </button>
                </span>
              )}
            />
          </The>
        </>
      }
      chanTrang={
        <p>© 2025 Khám phá Huế — Bài 9 React</p>
      }
    />
  );
}

export default TrangDanhMuc;
