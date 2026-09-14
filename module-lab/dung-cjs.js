// NHẬP bằng require() — CommonJS
const { formatDate, truncate, toSlug } = require('./utils-cjs');

//--Thử nghiệm 1: formatDate--
const homNay = new Date();
console.log('Ngày hôm nay:', formatDate(homNay));
//Ngày hôm nay 24/8

//--Thử nghiệm 2: truncate--
const tieuDeDai = 'Học React cơ bản đến nâng cao tại Đại học Phú Xuân năm 2026';
console.log('Rút ngắn:', truncate(tieuDeDai, 40));
//Rút ngắn: Học React từ cơ bản đến nâng cao...

//--Thử nghiệm 3: toSlug--
const tieuDe = 'Gioi thiệu React và JSX';
console.log('Slug:', toSlug(tieuDe));
//slug: gii-thiu-react-v-jsx