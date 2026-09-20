import { useForm } from '../../hooks/useForm';

const GIA_TRI_BAN_DAU = { hoTen: '', noiDung: '' };

function kiemChungGopY(d) {
  const loi = {};
  if (!d.hoTen.trim()) loi.hoTen = 'Vui lòng nhập họ tên.';
  if (d.noiDung.trim().length < 10) loi.noiDung = 'Góp ý cần ít nhất 10 ký tự.';
  return loi;
}

/**
 * Lab 4 — Bước 3: Chứng minh useForm dùng lại được với một biểu mẫu hoàn toàn khác.
 * Không sao chép state hay handler nào — tất cả đến từ useForm.
 */
export default function FormGopY() {
  const { duLieu, dangGui, xuLyThayDoi, xuLyRoiOi, loiCuaO, xuLyGui, datLai } =
    useForm(GIA_TRI_BAN_DAU, kiemChungGopY);

  const gui = xuLyGui(async (gt) => {
    await new Promise((r) => setTimeout(r, 800));
    alert('Cảm ơn góp ý của ' + gt.hoTen);
    datLai();
  });

  return (
    <form onSubmit={gui} noValidate>
      <div>
        <label htmlFor="hoTen">Họ tên</label>
        <input
          id="hoTen"
          name="hoTen"
          type="text"
          value={duLieu.hoTen}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiOi}
          aria-invalid={loiCuaO('hoTen') ? true : undefined}
        />
        {loiCuaO('hoTen') && <p role="alert">{loiCuaO('hoTen')}</p>}
      </div>

      <div>
        <label htmlFor="noiDung">Nội dung góp ý</label>
        <textarea
          id="noiDung"
          name="noiDung"
          rows={5}
          value={duLieu.noiDung}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiOi}
          aria-invalid={loiCuaO('noiDung') ? true : undefined}
        />
        {loiCuaO('noiDung') && <p role="alert">{loiCuaO('noiDung')}</p>}
      </div>

      <button type="submit" disabled={dangGui}>
        {dangGui ? 'Đang gửi...' : 'Gửi góp ý'}
      </button>
    </form>
  );
}
