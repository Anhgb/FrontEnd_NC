import React, { useState, useRef, useEffect } from 'react';
import { kiemTra } from '../utils'; 

export default function FormDatMon({ onGui, choPhepGui }) {
    const inputHoTenRef = useRef(null);
    
    const [form, setForm] = useState({ hoTen: '', soDienThoai: '', ghiChu: '' });
    const [loi, setLoi] = useState({ hoTen: '', soDienThoai: '' });

    useEffect(() => {
        if (inputHoTenRef.current) {
            inputHoTenRef.current.focus();
        }
    }, []);

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (name !== 'ghiChu') {
            const errorMsg = kiemTra(name, value);
            setLoi(prev => ({ ...prev, [name]: errorMsg }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        const errHoTen = kiemTra('hoTen', form.hoTen);
        const errSDT = kiemTra('soDienThoai', form.soDienThoai);
        
        setLoi({ hoTen: errHoTen, soDienThoai: errSDT });

        if (!errHoTen && !errSDT) {
            onGui({
                hoTen: form.hoTen.trim(),
                soDienThoai: form.soDienThoai.trim(),
                ghiChu: form.ghiChu.trim()
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Họ tên</label>
                <input
                    name="hoTen"
                    ref={inputHoTenRef}
                    value={form.hoTen}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {loi.hoTen && <p className="loi" role="alert">{loi.hoTen}</p>}
            </div>
            
            <div className="form-group">
                <label>Số điện thoại</label>
                <input
                    name="soDienThoai"
                    value={form.soDienThoai}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {loi.soDienThoai && <p className="loi" role="alert">{loi.soDienThoai}</p>}
            </div>
            
            <div className="form-group">
                <label>Ghi chú</label>
                <input
                    name="ghiChu"
                    value={form.ghiChu}
                    onChange={handleChange}
                />
            </div>
            
            <button type="submit" disabled={!choPhepGui}>Gửi đơn</button>
        </form>
    );
}