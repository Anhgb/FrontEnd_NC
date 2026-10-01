import React from "react";
export default function Header({tongPhan}) {
    const tenQuan = import.meta.env.VITE_TEN_QUAN || "quán Huế Xưa";
    return (
        <header>
            <h1>{tenQuan}</h1>
            <div data-testid="tong-phan">Giỏ: [{tongPhan}] phần</div>
        </header>
    );
}