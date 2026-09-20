import { useState } from 'react';

// Lab 2 — Bước 4: Dữ liệu nhóm hộp kiểm Tiện ích (giữ local vì không trong GIA_TRI_BAN_DAU)
const DS_TIEN_ICH = [
  { ma: 'bai-xe', ten: 'Bãi đỗ xe' },
  { ma: 'huong-dan', ten: 'Có hướng dẫn viên' },
  { ma: 've-online', ten: 'Bán vé trực tuyến' },
  { ma: 'khu-ve-sinh', ten: 'Khu vệ sinh công cộng' },
];

/**
 * Lab 5 — Bước 2: FormThemDiaDiem nhận props từ cha (TrangThemDiaDiem)
 * thay vì tự gọi useForm — component chỉ lo kết xuất, không quản lý state biểu mẫu.
 *
 * Props:
 *   duLieu       — object giá trị hiện tại của form
 *   dangGui      — boolean: đang trong quá trình gửi
 *   xuLyThayDoi  — handler onChange
 *   xuLyRoiOi   — handler onBlur
 *   loiCuaO      — function(tenTruong) → thông báo lỗi hoặc undefined
 *   xuLyGui      — function nhận guiDuLieu, trả về async onSubmit handler
 *   datLai       — function đặt lại form về giá trị ban đầu
 */
export default function FormThemDiaDiem({
  duLieu,
  dangGui,
  xuLyThayDoi,
  xuLyRoiOi,
  loiCuaO,
  xuLyGui,
  datLai,
}) {
  // tienIch vẫn là state cục bộ vì không nằm trong GIA_TRI_BAN_DAU của useForm
  const [tienIch, setTienIch] = useState([]);

  function xuLyTich(e) {
    const { value, checked } = e.target;
    setTienIch((truoc) =>
      checked ? [...truoc, value] : truoc.filter((m) => m !== value)
    );
  }

  // Kết hợp guiDuLieu với xuLyGui từ props để tạo onSubmit handler
  const gui = xuLyGui(async (gt) => {
    await new Promise((r) => setTimeout(r, 1200)); // giả lập gọi máy chủ
    alert('Đã thêm địa điểm: ' + gt.ten);
    datLai();
    setTienIch([]);
  });

  return (
    <form onSubmit={gui} noValidate>
      {/* Trường: Tên địa điểm */}
      <div className="truong">
        <label htmlFor="ten">Tên địa điểm</label>
        <input
          id="ten"
          name="ten"
          type="text"
          value={duLieu.ten}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiOi}
          placeholder="Ví dụ: Lăng Minh Mạng"
          aria-invalid={loiCuaO('ten') ? true : undefined}
        />
        {loiCuaO('ten') && (
          <p role="alert" className="thong-bao-loi">{loiCuaO('ten')}</p>
        )}
      </div>

      {/* Trường: Mô tả ngắn */}
      <div className="truong">
        <label htmlFor="moTa">Mô tả ngắn</label>
        <textarea
          id="moTa"
          name="moTa"
          rows={4}
          value={duLieu.moTa}
          onChange={xuLyThayDoi}
        />
      </div>

      {/* Trường: Giá vé */}
      <div className="truong">
        <label htmlFor="giaVe">Giá vé (VNĐ)</label>
        <input
          id="giaVe"
          name="giaVe"
          type="number"
          value={duLieu.giaVe}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiOi}
          placeholder="0"
          aria-invalid={loiCuaO('giaVe') ? true : undefined}
        />
        {loiCuaO('giaVe') && (
          <p role="alert" className="thong-bao-loi">{loiCuaO('giaVe')}</p>
        )}
      </div>

      {/* Trường: Phường / xã */}
      <div className="truong">
        <label htmlFor="phuong">Phường / xã</label>
        <select
          id="phuong"
          name="phuong"
          value={duLieu.phuong}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiOi}
          aria-invalid={loiCuaO('phuong') ? true : undefined}
        >
          <option value="">-- Chọn phường --</option>
          <option value="phu-hau">Phú Hậu</option>
          <option value="huong-long">Hương Long</option>
          <option value="thuy-bieu">Thuỷ Biều</option>
          <option value="vy-da">Vỹ Dạ</option>
        </select>
        {loiCuaO('phuong') && (
          <p role="alert" className="thong-bao-loi">{loiCuaO('phuong')}</p>
        )}
      </div>

      {/* Nhóm nút chọn Loại hình (radio) */}
      <fieldset>
        <legend>Loại hình</legend>

        <label>
          <input
            name="loaiHinh"
            type="radio"
            value="di-tich"
            checked={duLieu.loaiHinh === 'di-tich'}
            onChange={xuLyThayDoi}
          />
          Di tích lịch sử
        </label>

        <label>
          <input
            name="loaiHinh"
            type="radio"
            value="am-thuc"
            checked={duLieu.loaiHinh === 'am-thuc'}
            onChange={xuLyThayDoi}
          />
          Điểm ẩm thực
        </label>
      </fieldset>

      {/* Nhóm hộp kiểm Tiện ích (state mảng cục bộ) */}
      <fieldset>
        <legend>Tiện ích tại điểm đến</legend>
        {DS_TIEN_ICH.map((ti) => (
          <label key={ti.ma}>
            <input
              type="checkbox"
              value={ti.ma}
              checked={tienIch.includes(ti.ma)}
              onChange={xuLyTich}
            />
            {ti.ten}
          </label>
        ))}
      </fieldset>

      {/* Hộp kiểm Xác nhận */}
      <label>
        <input
          name="dongY"
          type="checkbox"
          checked={duLieu.dongY}
          onChange={xuLyThayDoi}
        />
        Tôi xác nhận thông tin địa điểm là chính xác
      </label>
      {loiCuaO('dongY') && (
        <p role="alert" className="thong-bao-loi">{loiCuaO('dongY')}</p>
      )}

      {/* Nút gửi có trạng thái + nút nhập lại */}
      <button type="submit" disabled={dangGui}>
        {dangGui ? 'Đang lưu...' : 'Thêm địa điểm'}
      </button>
      <button
        type="button"
        onClick={() => { datLai(); setTienIch([]); }}
      >
        Nhập lại
      </button>
    </form>
  );
}