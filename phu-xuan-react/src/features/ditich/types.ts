export type LoaiDiTich = 'tat-ca' | 'cung-dien' | 'lang-tam' | 'chua' | 'cong-trinh';

export type DiTich = {
  id: number;
  ten: string;
  loai: Exclude<LoaiDiTich, 'tat-ca'>;
  moTa: string;
  anh: string;
  daThamQuan: boolean;
};

export type DiTichFilter = {
  tuKhoa: string;
  loai: LoaiDiTich;
  chiChuaThamQuan: boolean;
};
