const SearchBar = ({ initialKeyword, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.elements.searchKeyword.value;
    onSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '15px' }}>
      <input
        type="text"
        name="searchKeyword"
        defaultValue={initialKeyword || ''}
        placeholder="Tìm kiếm sản phẩm..."
        style={{ padding: '8px', width: '250px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '8px 15px', marginLeft: '10px', cursor: 'pointer', borderRadius: '4px' }}>
        Tìm kiếm
      </button>
    </form>
  );
};

export default SearchBar;