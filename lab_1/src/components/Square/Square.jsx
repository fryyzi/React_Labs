import React from 'react';

function Square({ value, onClick }) {
  return (
    <button
      className="square"
      onClick={onClick}
      style={{
        width: '60px',
        height: '60px',
        fontSize: '24px',
        textAlign: 'center',
        margin: '5px',
        backgroundColor: '#7bcada',
        border: '1px solid #999',
        cursor: 'pointer',
      }}
    >
      {value}
    </button>
  );
}

export default Square;
