import { useState, useEffect } from 'react';
import fetchMonAn from '../../data/fetchMonAn';

function ChiTietMonAn({ idMonAn }) {
    const [monAn, setMonAn] = useState(null);
    const [dangTai, setDangTai] = useState(true);

    useEffect(() => {
        let daHuy = false;
        setDangTai(true);

        fetchMonAn(idMonAn).then((data) => {
            if (!daHuy) {
                setMonAn(data);
                setDangTai(false);
            }
        });

        return () => {
            daHuy = true;
        };
    }, [idMonAn]);

    if (dangTai) return <p>Đang tải thông tin món ăn…</p>;

    return (
        <div>
            <h3>{monAn.ten} — {monAn.gia.toLocaleString()}đ</h3>
            <p>{monAn.moTa}</p>
        </div>
    );
}

export default ChiTietMonAn;