export type Tour = {
  id: number;
  name: string;
  price: number; // VNĐ
  duration: string;
  image: string;
  description: string;
};

export const TOURS: Tour[] = [
  {
    id: 1,
    name: 'Tour Đại Nội',
    price: 250000,
    duration: '3 giờ',
    image: 'https://picsum.photos/id/1015/400/250',
    description: 'Khám phá quần thể cung điện triều Nguyễn.',
  },
  {
    id: 2,
    name: 'Tour Lăng Tự Đức',
    price: 380000,
    duration: '4 giờ',
    image: 'https://picsum.photos/id/1039/400/250',
    description: 'Viếng thăm lăng vua nổi tiếng nhất Huế.',
  },
  {
    id: 3,
    name: 'Tour Sông Hương',
    price: 450000,
    duration: '5 giờ',
    image: 'https://picsum.photos/id/1043/400/250',
    description: 'Du thuyền trên dòng sông Hương thơ mộng.',
  },
  {
    id: 4,
    name: 'Tour Ẩm Thực',
    price: 550000,
    duration: '4 giờ',
    image: 'https://picsum.photos/id/1040/400/250',
    description: 'Khám phá ẩm thực đặc sắc Huế cùng hướng dẫn viên.',
  },
  {
    id: 5,
    name: 'Tour Làng Nghề',
    price: 850000,
    duration: '6 giờ',
    image: 'https://picsum.photos/id/1048/400/250',
    description: 'Thăm làng nghề thủ công truyền thống quanh Huế.',
  },
  {
    id: 6,
    name: 'Tour VIP Hoàng Cung',
    price: 1200000,
    duration: '8 giờ',
    image: 'https://picsum.photos/id/1050/400/250',
    description: 'Trải nghiệm trọn vẹn di sản Huế theo phong cách VIP.',
  },
];
