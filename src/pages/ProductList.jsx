
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductItem from '../components/ProductItem';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 4;

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchKeyword = searchParams.get('search') || '';
  const selectedCategory = searchParams.get('category') || 'all';
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const updateParams = (newParams) => {
    const updated = new URLSearchParams(searchParams);
    Object.keys(newParams).forEach((key) => {
      if (newParams[key] === '' || newParams[key] === 'all') {
        updated.delete(key);
      } else {
        updated.set(key, newParams[key]);
      }
    });
    setSearchParams(updated);
  };

  const handleSearch = (keyword) => {
    updateParams({ search: keyword, page: 1 });
  };

  const handleCategoryChange = (category) => {
    updateParams({ category, page: 1 });
  };

  const handlePageChange = (page) => {
    updateParams({ page });
  };


  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

 
  const totalProducts = filteredProducts.length;


  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Danh sách sản phẩm</h2>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
        <SearchBar initialKeyword={searchKeyword} onSearch={handleSearch} />
        <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={handleCategoryChange} />
      </div>

      <p style={{ fontWeight: 'bold' }}>Tổng số sản phẩm hiện tại: {totalProducts}</p>

      {currentProducts.length > 0 ? (
        <>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '15px' }}>
            {currentProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <p style={{ color: 'red', marginTop: '15px' }}>Không có sản phẩm nào phù hợp.</p>
      )}
    </div>
  );
};

export default ProductList;