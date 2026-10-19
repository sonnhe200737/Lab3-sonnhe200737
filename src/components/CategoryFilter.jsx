

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    { label: 'Tất cả danh mục', value: 'all' },
    { label: 'Điện thoại', value: 'Điện thoại' },
    { label: 'Laptop', value: 'Laptop' },
    { label: 'Máy tính bảng', value: 'Máy tính bảng' },
    { label: 'Phụ kiện', value: 'Phụ kiện' }
  ];

  return (
    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="category-select" style={{ marginRight: '10px', fontWeight: 'bold' }}>
        Danh mục:
      </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      >
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;