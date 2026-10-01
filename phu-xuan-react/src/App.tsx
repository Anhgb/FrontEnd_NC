import { useState } from 'react';
import { TourListContainer } from './features/tours/TourListContainer';
import { DiTichListView } from './features/ditich/DiTichListView';
import './App.css';

// Bài 10 — Tab navigation chuyển giữa Tours và Di tích (Lab 4)
type Tab = 'tours' | 'ditich';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('tours');

  return (
    <div className="app">
      <nav className="app-tabs">
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

      {activeTab === 'tours' && <TourListContainer />}
      {activeTab === 'ditich' && <DiTichListView />}
    </div>
  );
}

export default App;