// NHẬP named exports — phải đúng tên, phải có { }
import { formatDate, truncate, toSlug } from './utils-esm.js';

// NHẬP default export — đặt tên tuỳ ý, KHÔNG có { }
import Utils from './utils-esm.js';

// --- Dùng named imports ---
console.log('Named: ngày hôm nay:', formatDate(new Date()));

// --- Dùng default import ---
console.log('Default: slug:', Utils.toSlug('Xin chào phu-xuan-react'));

// --- So sánh: cùng kết quả, khác cách nhập ---
const tieu = 'React nâng cao 2026';
console.log('Named  truncate:', truncate(tieu, 15));
console.log('Default truncate:', Utils.truncate(tieu, 15));
