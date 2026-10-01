import { useState, useEffect } from 'react';

export default function useLocalStorage(khoa, giaTriDau) {
    const [giaTri, setGiaTri] = useState(() => {
        try {
            const item = window.localStorage.getItem(khoa);
            return item ? JSON.parse(item) : giaTriDau;
        } catch (error) {
            console.error("Lỗi parse dữ liệu từ localStorage:", error);
            return giaTriDau;
        }
    });
    useEffect(() => {
        window.localStorage.setItem(khoa, JSON.stringify(giaTri));
    }, [khoa, giaTri]);

    return [giaTri, setGiaTri];
}