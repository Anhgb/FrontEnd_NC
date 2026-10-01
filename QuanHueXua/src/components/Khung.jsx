import React from 'react';

export default function Khung ({tieuDe, hanhDong, children}) {
    return (
        <section className='khung'>
            <div className='khung-header'>
                <h2>{tieuDe}</h2>
                {hanhDong && <div className="hanh-dong">{hanhDong}</div>}
            </div>
            <div className="khung-body">
                {children}
            </div>
        </section>
    );
}