import { useState, useEffect } from "react";

function LuotXemDaiNoi() {
    const[luotXem, setLuotXem] = useState(120);

    useEffect(()=> {
        console.log('Đã gắn compoment - bắt đầu đếm lượt xem');
        const idBoDem = setInterval(()=> {
            setLuotXem(soCu => soCu+1);
        }, 1000);

        return ()=> {
            console.log('Dọn dẹp: đã hủy bộ đếm lượt xem');
            clearInterval(idBoDem);
        }
    }, []);

    return (
        <div className="the-luot-xem">
            <h3>Đại Nội Huế</h3>
            <p>Đang xem: {luotXem} lượt</p>
        </div>
    );
    
}
export default LuotXemDaiNoi;