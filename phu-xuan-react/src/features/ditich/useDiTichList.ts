import { useState, useMemo } from 'react';
import { DANH_SACH_DI_TICH } from '../../data/ditich';
import type { DiTich, DiTichFilter } from './types';

const DEFAULT_FILTER: DiTichFilter = {
  tuKhoa: '',
  loai: 'tat-ca',
  chiChuaThamQuan: false,
};

/**
 * Lab 4 — Custom Hook: Thay thế Container Component.
 * Encapsulates toàn bộ state, logic lọc, và immutable updaters.
 */
export function useDiTichList() {
  const [danhSach, setDanhSach] = useState<DiTich[]>(DANH_SACH_DI_TICH);
  const [boLoc, setBoLoc] = useState<DiTichFilter>(DEFAULT_FILTER);

  const danhSachHienThi = useMemo(() => {
    return danhSach.filter((dt) => {
      const matchTuKhoa = dt.ten
        .toLowerCase()
        .includes(boLoc.tuKhoa.trim().toLowerCase());
      const matchLoai = boLoc.loai === 'tat-ca' || dt.loai === boLoc.loai;
      const matchChua = !boLoc.chiChuaThamQuan || !dt.daThamQuan;
      return matchTuKhoa && matchLoai && matchChua;
    });
  }, [danhSach, boLoc]);

  /** Cập nhật một phần bộ lọc (immutable) */
  function capNhatBoLoc(partial: Partial<DiTichFilter>) {
    setBoLoc((prev) => ({ ...prev, ...partial }));
  }

  /** Toggle trạng thái đã tham quan (immutable map) */
  function danhDauDaThamQuan(id: number) {
    setDanhSach((prev) =>
      prev.map((dt) =>
        dt.id === id ? { ...dt, daThamQuan: !dt.daThamQuan } : dt
      )
    );
  }

  /** Đặt lại bộ lọc về mặc định */
  function resetBoLoc() {
    setBoLoc(DEFAULT_FILTER);
  }

  return {
    danhSachHienThi,
    totalCount: danhSach.length,
    boLoc,
    capNhatBoLoc,
    danhDauDaThamQuan,
    resetBoLoc,
  };
}
