import { useState } from 'react';
import MenuList from './components/MenuList';
import { menuItems } from './data/menu';

function App() {
  const [favoriteIds, setFavoriteIds] = useState(new Set());

  function handleToggleFavorite(id, nextFav) {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      if (nextFav) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  }

  return (
    <div className="app">
      <h1>🍜 Thực đơn Ẩm thực Huế</h1>
      <p className="favorite-count">
        Số món đã yêu thích: <strong>{favoriteIds.size}/{menuItems.length}</strong>
      </p>

      <MenuList items={menuItems} onToggleFavorite={handleToggleFavorite} />
    </div>
  );
}

export default App;
