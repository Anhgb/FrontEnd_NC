// import { useState } from 'react';
// import AttractionList from './components/AttractionList';
// import CategoryTabs from './components/CategoryTabs';
// import { attractions } from './data/attractions';
// import LuotXemDaiNoi from './features/landmarks/LuotXemDaiNoi';
// import TrangMonAn from './features/food/TrangMonAn';
// import TimMonAn from './features/food/TimMonAn';
// import DanhSachDiaDanh from './features/landmarks/DanhSachDiaDanh';

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState('Tất cả');
//   // Lab 1 — nút bật/tắt để kiểm thử cleanup của LuotXemDaiNoi
//   const [hienThiLuotXem, setHienThiLuotXem] = useState(true);

//   const categories = [
//     'Tất cả',
//     ...new Set(attractions.map((item) => item.category)),
//   ];

//   const filteredAttractions =
//     selectedCategory === 'Tất cả'
//       ? attractions
//       : attractions.filter((item) => item.category === selectedCategory);

//   return (
//     <div className="app">
//       <h1>Khám phá Huế</h1>

//       {/* Lab 1 — LuotXemDaiNoi với nút bật/tắt để quan sát cleanup */}
//       <button onClick={() => setHienThiLuotXem(!hienThiLuotXem)}>
//         {hienThiLuotXem ? 'Ẩn thẻ Đại Nội' : 'Hiện thẻ Đại Nội'}
//       </button>
//       {hienThiLuotXem && <LuotXemDaiNoi />}

//       <hr />

//       {/* Lab 2 — Chọn và xem chi tiết món ăn */}
//       <TrangMonAn />

//       <hr />

//       {/* Lab 3 + Lab 5 — Ô tìm kiếm tự động focus + debounce lọc món ăn */}
//       <TimMonAn />

//       <hr />

//       {/* Lab 4 — Danh sách địa danh với useMemo + useCallback + React.memo */}
//       <DanhSachDiaDanh />

//       <hr />

//       <CategoryTabs
//         categories={categories}
//         selectedCategory={selectedCategory}
//         onSelectCategory={setSelectedCategory}
//       />
//       <AttractionList attractions={filteredAttractions} />
//     </div>
//   );
// }

// export default App;
// import TrangThemDiaDiem from './pages/TrangThemDiaDiem'; // Bài 8
import TrangDanhMuc from './pages/TrangDanhMuc';

// Bài 9 — Tái sử dụng thành phần: Props, Children, JSX Slots, Render Props, Composition
export default function App() {
  return <TrangDanhMuc />;
}