// COMMONJS — cú pháp truyền thống của Node.js
// Từ khoá: require() để nhập, module.exports để xuất

// Hàm 1: Định dạng ngày tháng kiểu VN
function formatDate(date) {
    return date.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}

// Hàm 2: Rút ngắn chuỗi nếu quá dài
function truncate(str, maxLength = 50) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + '...';
}

// Hàm 3: Tạo slug từ tiêu đề bài viết
function toSlug(title) {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-')         // thay khoảng trắng bằng dấu -
        .replace(/[^a-z0-9-]/g, ''); // xoá ký tự đặc biệt
}

// XUẤT: gán vào module.exports (CommonJS)
module.exports = { formatDate, truncate, toSlug };