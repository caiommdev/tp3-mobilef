import React from 'react';

function Button({ label }) {

    const styles = {
        button: {
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }
      };

    return (
    <button style={styles.button}>
      {label}
    </button>
  );
}

export default Button;
