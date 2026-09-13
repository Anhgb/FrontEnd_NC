import { useState, useEffect } from 'react';

function useDebounce(giaTri, doTre) {
  const [giaTriDaTre, setGiaTriDaTre] = useState(giaTri);

  useEffect(() => {
    // Đặt setTimeout để cập nhật giaTriDaTre sau `doTre` mili-giây
    const idHenGio = setTimeout(() => {
      setGiaTriDaTre(giaTri);
    }, doTre);

    // Hàm cleanup: huỷ bộ đếm cũ mỗi khi giaTri đổi trước khi hết thời gian
    return () => {
      clearTimeout(idHenGio);
    };
  }, [giaTri, doTre]);

  return giaTriDaTre;
}

export default useDebounce;
