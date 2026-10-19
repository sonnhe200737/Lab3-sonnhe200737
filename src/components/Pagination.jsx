

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: '20px', display: 'flex', gap: '5px' }}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        style={{ padding: '5px 10px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
      >
        Trước
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            padding: '5px 10px',
            backgroundColor: currentPage === page ? '#007bff' : '#fff',
            color: currentPage === page ? '#fff' : '#000',
            border: '1px solid #ccc',
            cursor: 'pointer',
            borderRadius: '3px'
          }}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        style={{ padding: '5px 10px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
      >
        Sau
      </button>
    </div>
  );
};

export default Pagination;