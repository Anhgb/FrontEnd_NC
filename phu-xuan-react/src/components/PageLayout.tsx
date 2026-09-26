import './PageLayout.css';

type PageLayoutProps = {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  main: React.ReactNode;
};

/**
 * Lab 3 — Named Slots Composition.
 * Layout tái sử dụng với 3 khe JSX: header, sidebar, main.
 */
export default function PageLayout({ header, sidebar, main }: PageLayoutProps) {
  return (
    <div className="page-layout">
      <header className="page-layout__header">{header}</header>
      <div className="page-layout__body">
        <aside className="page-layout__sidebar">{sidebar}</aside>
        <main className="page-layout__main">{main}</main>
      </div>
    </div>
  );
}
