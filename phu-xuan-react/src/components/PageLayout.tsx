import type { ReactNode } from 'react';
import './PageLayout.css';

type PageLayoutProps = {
  header: ReactNode;
  sidebar: ReactNode;
  main: ReactNode;
};

// Khung 3 khe, dùng lại cho mọi trang danh sách (tour, nhà hàng, di tích...)
export function PageLayout({ header, sidebar, main }: PageLayoutProps) {
  return (
    <div className="page-layout">
      <header className="page-layout_header">{header}</header>
      <div className="page-layout_body">
        <aside className="page-layout_sidebar">{sidebar}</aside>
        <main className="page-layout_main">{main}</main>
      </div>
    </div>
  );
}
