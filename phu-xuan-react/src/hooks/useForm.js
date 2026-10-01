import { useState } from 'react';

/**
 * Hook dùng chung cho mọi biểu mẫu có kiểm soát.
 * Đóng gói: state dữ liệu, state đã chạm, handler onChange/onBlur,
 * hàm hiển thị lỗi, hàm xử lý gửi, và hàm đặt lại.
 *
 * @param {object} giaTriBanDau - Giá trị khởi tạo của state biểu mẫu
 * @param {function} kiemChung  - Hàm thuần: nhận duLieu, trả về object lỗi
 */
export function useForm(giaTriBanDau, kiemChung) {
  const [duLieu, setDuLieu] = useState(giaTriBanDau);
  const [daCham, setDaCham] = useState({});
  const [dangGui, setDangGui] = useState(false);

  // Lỗi là trạng thái dẫn xuất — tính lại mỗi lần kết xuất
  const loi = kiemChung(duLieu);
  const hopLe = Object.keys(loi).length === 0;

  function xuLyThayDoi(e) {
    const { name, value, type, checked } = e.target;
    setDuLieu((truoc) => ({
      ...truoc,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function xuLyRoiOi(e) {
    const { name } = e.target;
    setDaCham((truoc) => ({ ...truoc, [name]: true }));
  }

  // Chỉ hiển thị lỗi khi ô đã được chạm vào
  function loiCuaO(ten) {
    return daCham[ten] ? loi[ten] : undefined;
  }

  function datLai() {
    setDuLieu(giaTriBanDau);
    setDaCham({});
    setDangGui(false);
  }

  /**
   * Trả về một async handler onSubmit.
   * Nhận một hàm guiDuLieu(duLieu) — chứa logic gọi API thực sự.
   */
  function xuLyGui(guiDuLieu) {
    return async (e) => {
      e.preventDefault();

      // Đánh dấu mọi ô là đã chạm để lộ hết lỗi còn sót
      const tatCaDaCham = {};
      Object.keys(giaTriBanDau).forEach((k) => { tatCaDaCham[k] = true; });
      setDaCham(tatCaDaCham);

      if (Object.keys(kiemChung(duLieu)).length > 0) return;

      try {
        setDangGui(true);
        await guiDuLieu(duLieu);
      } finally {
        setDangGui(false);
      }
    };
  }

  return {
    duLieu,
    loi,
    daCham,
    dangGui,
    hopLe,
    xuLyThayDoi,
    xuLyRoiOi,
    loiCuaO,
    xuLyGui,
    datLai,
    setDuLieu,
  };
}
