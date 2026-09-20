import '../styles/Bai8.css';
import { useForm } from '../hooks/useForm';
import { kiemChung } from '../features/dia-diem/KiemChung';
import FormThemDiaDiem from '../features/dia-diem/FormThemDiaDiem';
import XemTruocTheDiaDiem from '../features/dia-diem/XemTruocTheDiaDiem';

const GIA_TRI_BAN_DAU = {
  ten: '',
  moTa: '',
  giaVe: '',
  phuong: '',
  loaiHinh: 'di-tich',
  dongY: false,
};

/**
 * Lab 5 — Bước 1+2: Trang cha nâng trạng thái (state lifting).
 * - Gọi useForm ở đây để quản lý toàn bộ state biểu mẫu.
 * - Truyền state + handler xuống FormThemDiaDiem qua props.
 * - Truyền duLieu xuống XemTruocTheDiaDiem để xem trước real-time.
 */
export default function TrangThemDiaDiem() {
  const formProps = useForm(GIA_TRI_BAN_DAU, kiemChung);

  return (
    <div className="trang-them-dia-diem">
      <h2>Thêm địa điểm mới</h2>

      <div className="bo-cuc-hai-cot">
        {/* Cột trái: form nhập liệu */}
        <section className="cot-form">
          <FormThemDiaDiem
            duLieu={formProps.duLieu}
            dangGui={formProps.dangGui}
            xuLyThayDoi={formProps.xuLyThayDoi}
            xuLyRoiOi={formProps.xuLyRoiOi}
            loiCuaO={formProps.loiCuaO}
            xuLyGui={formProps.xuLyGui}
            datLai={formProps.datLai}
          />
        </section>

        {/* Cột phải: xem trước real-time */}
        <section className="cot-xem-truoc">
          <h3>Xem trước</h3>
          <XemTruocTheDiaDiem diaDiem={formProps.duLieu} />
        </section>
      </div>
    </div>
  );
}
