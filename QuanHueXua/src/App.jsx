import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DanhSachMon from './components/DanhSachMon';
import Khung from './components/Khung';
import GioHang from './components/GioHang';
import FormDatMon from './components/FormDatMon';
import useLocalStorage from './hooks/useLocalStorage';
import { dsMon } from './data';

export default function App() {
    const [gio, setGio] = useLocalStorage("gio-hang", []);
    const [idDangChon, setIdDangChon] = useState(null);
    const [formKey, setFormKey] = useState(0);
    const [thongBao, setThongBao] = useState('');

    const tongPhan = gio.reduce((tong, item) => tong + item.soLuong, 0);
    useEffect(() => {
        const tenQuan = import.meta.env.VITE_TEN_QUAN || "Quán Huế Xưa";
        document.title = tongPhan > 0 ? `(${tongPhan}) ${tenQuan}` : tenQuan;
    }, [tongPhan]);

    const handleDatMon = (id) => {
        setGio(prevGio => {
            const index = prevGio.findIndex(item => item.id === id);
            if (index !== -1) {
                const newGio = [...prevGio];
                newGio[index] = { ...newGio[index], soLuong: newGio[index].soLuong + 1 };
                return newGio;
            }
            return [...prevGio, { id, soLuong: 1 }];
        });
    };

    const handleXoaGioHang = () => {
        setGio([]);
    };

    const handleGuiDon = (thongTin) => {
        setThongBao(`Đã nhận đơn của ${thongTin.hoTen}`);
        setGio([]);
        setFormKey(prev => prev + 1);
    };

    return (
        <div className="container">
            <Header tongPhan={tongPhan} />
            
            <main>
                <Khung tieuDe="Thực đơn">
                    <DanhSachMon 
                        dsMon={dsMon} 
                        idDangChon={idDangChon} 
                        onChon={setIdDangChon} 
                        onDat={handleDatMon} 
                    />
                </Khung>

                <Khung 
                    tieuDe="Giỏ hàng" 
                    hanhDong={<button onClick={handleXoaGioHang}>Xóa giỏ hàng</button>}
                >
                    <GioHang gio={gio} dsMon={dsMon} />
                </Khung>

                <Khung tieuDe="Thông tin nhận món">
                    {thongBao && <p role="status" className="thong-bao-thanh-cong">{thongBao}</p>}
                    <FormDatMon 
                        key={formKey} 
                        onGui={handleGuiDon} 
                        choPhepGui={gio.length > 0} 
                    />
                </Khung>
            </main>
        </div>
    );
}