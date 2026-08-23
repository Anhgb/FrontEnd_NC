// PostCard.tsx — thẻ hiển thị một bài viết
// Đây là thành phần trung tâm của phu-xuan-react:
// toàn bộ tính năng đọc bài viết sẽ xây xung quanh thành phần này
 
function PostCard() {
  // Dữ liệu mẫu — sẽ được truyền qua props ở Buổi 5,
  // và lấy từ API thật ở Buổi 17
  const tieuDe = 'Giới thiệu React: Tại sao không dùng Vanilla JS?'
  const tacGia = 'Nguyễn Văn An'
  const ngayDang = '2025-09-01'
  const tomTat =
    'React giải quyết bài toán đồng bộ giao diện với dữ liệu bằng cách ' +
    'mô tả giao diện theo trạng thái, thay vì thao tác DOM thủ công. ' +
    'Bài viết này so sánh trực tiếp hai cách tiếp cận qua ví dụ bộ đếm.'
  const soLuotXem = 128
 
  return (
    <article>
      {/* Tiêu đề bài viết */}
      <h3>{tieuDe}</h3>
 
      {/* Thông tin meta */}
      <p>
        ✍️ {tacGia} &nbsp;·&nbsp; 📅 {ngayDang} &nbsp;·&nbsp; 👁 {soLuotXem} lượt xem
      </p>
 
      {/* Tóm tắt nội dung */}
      <p>{tomTat}</p>
 
      {/* Nút hành động — chưa có chức năng, thêm ở Buổi 7 (sự kiện) */}
      <button>Đọc tiếp →</button>
    </article>
  )
}
 
export default PostCard
