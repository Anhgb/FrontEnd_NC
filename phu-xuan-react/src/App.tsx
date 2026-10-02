import { useState } from 'react';
import TourListContainer from './features/tours/TourListContainer';
import DiTichListView from './features/ditich/DiTichListView';
import GioiThieuHue from './components/buoi10/GioiThieuHue';
import DanhSachDiaDanhContainer from './components/buoi10/DanhSachDiaDanhContainer';
import BangDiaDanhCoLoc from './components/buoi10/BangDiaDanhCoLoc';
import GocCamNhan from './components/buoi10/GocCamNhan';
import './App.css';

type Tab = 'tours' | 'ditich' | 'buoi10';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('buoi10');
  // State yêu thích nâng lên App — cha chung của nav (đếm) và danh sách (toggle)
  const [dsYeuThich, setDsYeuThich] = useState<number[]>([]);

  function doiYeuThich(id: number) {
    setDsYeuThich((truoc) =>
      truoc.includes(id) ? truoc.filter((x) => x !== id) : [...truoc, id]
    );
  }

  return (
    <div className="app">
      <nav className="app-tabs">
        <button
          className={`app-tabs__btn${activeTab === 'buoi10' ? ' app-tabs__btn--active' : ''}`}
          onClick={() => setActiveTab('buoi10')}
        >
          📚 Buổi 10{dsYeuThich.length > 0 && <span className="app-tabs__badge" data-testid="so-yeu-thich">{dsYeuThich.length}</span>}
        </button>
        <button
          className={`app-tabs__btn${activeTab === 'tours' ? ' app-tabs__btn--active' : ''}`}
          onClick={() => setActiveTab('tours')}
        >
          🗺️ Tour du lịch
        </button>
        <button
          className={`app-tabs__btn${activeTab === 'ditich' ? ' app-tabs__btn--active' : ''}`}
          onClick={() => setActiveTab('ditich')}
        >
          🏛️ Di tích Huế
        </button>
      </nav>

      {activeTab === 'buoi10' && (
        <main style={{ padding: '0 24px' }}>
          <GioiThieuHue />
          <h2>Địa danh nổi bật</h2>
          <DanhSachDiaDanhContainer dsYeuThich={dsYeuThich} onDoiYeuThich={doiYeuThich} />
          <BangDiaDanhCoLoc />
          <GocCamNhan />
        </main>
      )}
      {activeTab === 'tours' && <TourListContainer />}
      {activeTab === 'ditich' && <DiTichListView />}
    </div>
  );
}

export default App;