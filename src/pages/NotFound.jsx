
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>Trang bạn đang tìm kiếm không tồn tại.</p>
      <Link to="/">Quay về trang chủ</Link>
    </div>
  );
};

export default NotFound;