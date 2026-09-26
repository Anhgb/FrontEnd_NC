import './SearchBox.css';

type Props = {
  query: string;
  onChange: (value: string) => void;
};

/**
 * Lab 3 — Presentational: Ô tìm kiếm có nút X xoá nhanh.
 * Controlled component — không có useState bên trong.
 */
export default function SearchBox({ query, onChange }: Props) {
  return (
    <div className="search-box">
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Tìm kiếm..."
        className="search-box__input"
        aria-label="Tìm kiếm"
      />
      {query && (
        <button
          className="search-box__clear"
          onClick={() => onChange('')}
          aria-label="Xoá tìm kiếm"
        >
          ✕
        </button>
      )}
    </div>
  );
}
