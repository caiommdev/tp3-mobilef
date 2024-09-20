import React from 'react';
import Button from './Button';

function Card({ title, content }) {
    
    const styles = {
        card: {
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          width: '300px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }
      };
  
    return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button label="Clique" />
    </div>
  );
}

export default Card;
