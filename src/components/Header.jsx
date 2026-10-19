
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '15px 20px', background: '#333', color: '#fff' }}>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({ color: isActive ? '#4caf50' : '#fff', textDecoration: 'none', fontWeight: 'bold' })}
        >
          Home
        </NavLink>
        <NavLink 
          to="/products" 
          style={({ isActive }) => ({ color: isActive ? '#4caf50' : '#fff', textDecoration: 'none', fontWeight: 'bold' })}
        >
          Products
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;