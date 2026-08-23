// Nhập thành phần Header vừa tạo
import Header from './components/Header'
import WelcomeBanner from './components/WelcomeBanner'
import PostCard from './components/PostCard'
import Footer from './components/Footer'


function App() {
  return (
    // Fragment <> </> cho phép trả về nhiều thẻ ngang cấp
    // mà không cần bọc trong <div> thừa
    <>
      <Header />
      <main>
        <WelcomeBanner />
        {/* PostCard hiển thị một bài viết mẫu */}
        {/* Buổi 5 sẽ dùng props để truyền dữ liệu thay vì hardcode */}
        <PostCard />
      </main>
      <Footer />
    </>
  )
}
 
export default App

