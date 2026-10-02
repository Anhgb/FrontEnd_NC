# Bài 10 BTVN — Module Di tích Huế

> **Họ tên:** *(Điền họ tên của bạn)*
> **MSSV:** *(Điền MSSV của bạn)*
> **Nhánh:** `feature/buoi10-btvn`

---

## 1. Sơ đồ cây thành phần — Module Di tích

```
App
└── DiTichListView               <- gọi useDiTichList(), không có state trực tiếp
    └── PageLayout               <- khung 3 khe tái sử dụng (header / sidebar / main)
        ├── [header]
        │   ├── h1 "Di tích Huế"
        │   ├── span đếm số di tích hiển thị / tổng
        │   └── SearchBox        <- controlled, nhận query + onChange từ ngoài
        ├── [sidebar]
        │   └── DiTichFilter     <- controlled, nhận boLoc + onCapNhat + onReset
        └── [main]
            └── DiTichCard x N   <- presentational, nhận diTich + onToggleThamQuan
```

**Vị trí state:**
- Toàn bộ state (`danhSach`, `boLoc`) nằm trong **`useDiTichList`** (custom hook).
- `DiTichListView` tiêu thụ hook — không có `useState`/`useEffect` trực tiếp.
- Không có Container riêng — hook đảm nhận vai trò đó.

---

## 2. Ba mẫu đã áp dụng

### Mẫu 1 — Lifting State Up (Nâng trạng thái)

**Áp dụng ở:** `useDiTichList` + `DiTichFilter` + `SearchBox`

State `boLoc` (từ khóa, loại, chiChuaThamQuan) được giữ trong hook thay vì phân tán vào từng
component con. `DiTichFilter` và `SearchBox` là presentational — chúng chỉ nhận `value` + `onChange`
và không biết dữ liệu đến từ đâu. Cách này đảm bảo có một "nguồn sự thật duy nhất" (single source
of truth): khi bộ lọc thay đổi, toàn bộ danh sách phản ứng đúng mà không cần đồng bộ thủ công.

### Mẫu 2 — Container / View (Custom Hook thay thế Container)

**Áp dụng ở:** `useDiTichList` thay thế Container Component truyền thống

Thay vì tạo một `DiTichListContainer.tsx` chứa state rồi render `DiTichListView`, tôi dùng
custom hook `useDiTichList` để tách logic khỏi UI. `DiTichListView` gọi hook và dùng kết quả
trực tiếp — cách tiếp cận hiện đại hơn, ít boilerplate hơn, dễ test hơn so với
Container Component thuần túy.

### Mẫu 3 — Composition với Named Slots (PageLayout)

**Áp dụng ở:** `PageLayout` được tái sử dụng cho cả Tours (Lab 3) lẫn Di tích (Lab 4)

`PageLayout` nhận 3 prop kiểu `ReactNode`: `header`, `sidebar`, `main`. Nó không import bất
cứ thứ gì từ `features/tours` hay `features/ditich` — hoàn toàn trung lập. Việc "lắp" nội dung
vào từng khe xảy ra ở tầng trên (`TourListView`, `DiTichListView`). Cách này tách phần "khung
bố cục" ra khỏi phần "nội dung tính năng", giúp tái sử dụng layout ở bất kỳ trang nào khác.

---

## 3. Khai báo AI

Tôi **không dùng AI** để tạo ra các file trong module Di tích. Tất cả code được viết tay
theo hướng dẫn trong file PDF `HuongDanThucHanh_Buoi10_INT7-18.pdf`.

*(Nếu có dùng AI hỗ trợ, ghi rõ đoạn nào — ví dụ: "Đoạn logic lọc trong `useDiTichList`
được viết với sự hỗ trợ của Claude, tôi đã đọc hiểu và chỉnh sửa lại cho phù hợp.")*

---

## 4. Khó khăn đã gặp và cách khắc phục

### Khó khăn 1 — TypeScript báo lỗi kiểu khi import `DiTich` từ nhiều file

**Vấn đề:** Lúc đầu định nghĩa type `DiTich` trực tiếp trong `ditich.ts`, sau đó lại
định nghĩa lại trong `features/ditich/types.ts`, dẫn đến lỗi "Type 'DiTich' is not assignable
to type 'DiTich'" (hai type khác nguồn dù cùng tên).

**Cách khắc phục:** Chuyển type sang một nơi duy nhất — `features/ditich/types.ts` — rồi
import vào `data/ditich.ts` thay vì khai báo lại. Bài học: **mỗi type chỉ định nghĩa một lần,
mọi nơi dùng phải import từ nguồn đó.**

### Khó khăn 2 — `DiTichListView` vô tình có logic lọc bên trong

**Vấn đề:** Lúc đầu đặt `.filter()` trực tiếp trong `DiTichListView` để tiện, khiến
View vừa hiển thị vừa xử lý dữ liệu — vi phạm nguyên tắc presentational component.

**Cách khắc phục:** Chuyển toàn bộ logic lọc vào `useDiTichList` (dùng `useMemo` để tối ưu).
View chỉ nhận mảng `danhSachHienThi` đã được lọc sẵn. Kiểm chứng bằng React DevTools: bấm
vào `DiTichListView`, mục "Hooks" chỉ hiện hook từ custom hook, không có `State` nào trực tiếp.

---

## 5. Cấu trúc file module Di tích

```
src/
├── data/
│   └── ditich.ts              <- 8 di tích Huế, dùng type từ features/ditich/types.ts
├── features/
│   └── ditich/
│       ├── types.ts           <- DiTich, DiTichFilter (union type loai)
│       ├── useDiTichList.ts   <- custom hook: state, lọc useMemo, updaters
│       ├── DiTichListView.tsx <- gọi hook, lắp PageLayout với 3 khe
│       ├── DiTichCard.tsx     <- presentational: hiển thị 1 di tích + nút toggle
│       ├── DiTichFilter.tsx   <- presentational: bộ lọc loại + checkbox chưa thăm
│       └── *.css              <- style tương ứng từng file
└── components/
    └── PageLayout.tsx         <- layout tái sử dụng (không phụ thuộc feature nào)
```
