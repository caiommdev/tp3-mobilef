import React from 'react';

function TextoEstilizado() {
 
    const styles = {
        paragraph: {
          backgroundColor: '#A8E0DF',
          color: '#333',
          padding: '15px',
          fontFamily: 'Arial, sans-serif',
          borderRadius: '5px',
          maxWidth: '600px',
          margin: '20px auto',
          textAlign: 'center'
        }
      };
 
    return (
    <p style={styles.paragraph}>
      Este é um texto estilizado usando inline styles em React.
    </p>
  );
}

export default TextoEstilizado;
