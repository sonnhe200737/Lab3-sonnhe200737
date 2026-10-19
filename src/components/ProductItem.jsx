
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3 style={{ marginTop: 0, fontSize: '18px' }}>{product.name}</h3>
        <p><strong>Danh mục:</strong> {product.category}</p>
        <p><strong>Giá:</strong> {product.price.toLocaleString('vi-VN')} VNĐ</p>
      </div>
      <Link to={`/products/${product.id}`} style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
        Xem chi tiết →
      </Link>
    </div>
  );
};

export default ProductItem;