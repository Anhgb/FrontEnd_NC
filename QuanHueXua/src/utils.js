/**
 * Định dạng giá tiền theo định dạng VND
 * @param {number} gia - Giá tiền (số)
 * @returns {string} - Chuỗi giá đã định dạng
 */
export function dinhDangGia(gia) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(gia);
}

/**
 * Kiểm tra tính hợp lệ của trường form
 * @param {string} name - Tên trường (hoTen | soDienThoai)
 * @param {string} value - Giá trị cần kiểm tra
 * @returns {string} - Thông báo lỗi (chuỗi rỗng nếu hợp lệ)
 */
export function kiemTra(name, value) {
    const trimmed = value.trim();
    if (name === 'hoTen') {
        if (!trimmed) return 'Họ tên không được để trống.';
        if (trimmed.length < 2) return 'Họ tên phải có ít nhất 2 ký tự.';
    }
    if (name === 'soDienThoai') {
        if (!trimmed) return 'Số điện thoại không được để trống.';
        if (!/^(0[3|5|7|8|9])[0-9]{8}$/.test(trimmed)) {
            return 'Số điện thoại không hợp lệ (VD: 0912345678).';
        }
    }
    return '';
}
