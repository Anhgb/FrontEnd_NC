import './SearchBox.css';

type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

// Không có state riêng — luôn nhận value + onChange từ ngoài
export function SearchBox({ value, onChange, placeholder }: SearchBoxProps) {
  return (
    <div className="search-box">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? 'Tìm kiếm...'}
      />
      {value && (
        <button
          type="button"
          className="search-box_clear"
          onClick={() => onChange('')}
          aria-label="Xóa từ khóa"
        >
          X
        </button>
      )}
    </div>
  );
}
