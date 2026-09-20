import BoCucTrang from '../components/BoCucTrang';
import The from '../components/The';
import TheDiaDanh from '../components/TheDiaDanh';
import DanhSach from '../components/DanhSach';
import HopThongBao, { HopThongBaoThanhCong } from '../components/HopThongBao';
import { DANH_SACH_DIA_DANH } from '../du-lieu/diaDanh';
import { DANH_SACH_MON_AN } from '../du-lieu/monAn';
import './TrangDanhMuc.css';

/**
 * Lab 4 — Trang danh mục lắp ghép tất cả thành phần đã học.
 * Minh hoạ: JSX Slots (BoCucTrang), children (The),
 * tái sử dụng (TheDiaDanh × .map), Render Props (DanhSach),
 * Composition & Specialization (HopThongBao).
 */
export default function TrangDanhMuc() {
  return (
    <BoCucTrang
      /* Khe 1 — Thanh điều hướng */
      thanhDieuHuong={
        <nav className="thanh-dieu-huong">
          <span className="thanh-dieu-huong__logo">🏯 Khám phá Huế</span>
          <ul className="thanh-dieu-huong__lien-ket">
            <li><a href="#dia-danh">Địa danh</a></li>
            <li><a href="#am-thuc">Ẩm thực</a></li>
          </ul>
        </nav>
      }

      /* Khe 2 — Nội dung chính */
      noiDungChinh={
        <>
          {/* Thông báo chào mừng */}
          <HopThongBaoThanhCong>
            Chào mừng bạn đến với trang khám phá địa danh &amp; ẩm thực Huế!
          </HopThongBaoThanhCong>

          <HopThongBao mauNen="#fffbeb" mauVienTren="#f6ad55">
            💡 Dữ liệu bên dưới được render bằng <code>.map()</code>, Render Props và
            thành phần <code>{'<The>'}</code> bọc ngoài.
          </HopThongBao>

          {/* Lab 1+2 — Lưới địa danh bên trong thành phần khung The */}
          <section id="dia-danh">
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
          </section>

          {/* Lab 3 — Render Props: 2 cách hiển thị cùng 1 component DanhSach */}
          <section id="am-thuc">
            <The tieuDe="Ẩm thực Huế">
              <p style={{ marginBottom: '1rem', color: '#4a5568', fontWeight: 600 }}>
                Kiểu 1 — Tên in đậm kèm giá:
              </p>
              <DanhSach
                cacMuc={DANH_SACH_MON_AN}
                hienThiMuc={(mon) => (
                  <span>
                    <strong>{mon.ten}</strong>
                    {' — '}
                    {mon.giaTien.toLocaleString('vi-VN')} đ
                  </span>
                )}
              />

              <hr style={{ margin: '1.25rem 0', borderColor: '#e2e8f0' }} />

              <p style={{ marginBottom: '1rem', color: '#4a5568', fontWeight: 600 }}>
                Kiểu 2 — Có nút &ldquo;Đặt món&rdquo;:
              </p>
              <DanhSach
                cacMuc={DANH_SACH_MON_AN}
                hienThiMuc={(mon) => (
                  <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {mon.ten}
                    <button
                      className="nut-dat-mon"
                      onClick={() => alert(`Đã đặt: ${mon.ten}`)}
                    >
                      Đặt món
                    </button>
                  </span>
                )}
              />
            </The>
          </section>
        </>
      }

      /* Khe 3 — Chân trang */
      chanTrang={
        <p>© {new Date().getFullYear()} Khám phá Huế — Bài 9 React Composition</p>
      }
    />
  );
}
