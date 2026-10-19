
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Không tìm thấy sản phẩm!</h2>
        <Link to="/products">Quay lại danh sách sản phẩm</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{product.name}</h2>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Danh mục:</strong> {product.category}</p>
      <p><strong>Giá:</strong> {product.price.toLocaleString('vi-VN')} VNĐ</p>
      <p><strong>Mô tả:</strong> {product.description}</p>

      <br />
      <Link to="/products" style={{ color: '#007bff' }}>← Quay lại danh sách sản phẩm</Link>
    </div>
  );
};

export default ProductDetail;