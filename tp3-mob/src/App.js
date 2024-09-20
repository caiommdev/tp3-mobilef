import React from 'react';
import Card from './Card';
import TextoEstilizado from './TextoEstilizado';
import Header from './Header';
import Footer from './Footer';
import './styles.css';

function App() {

  const styles = {
    appContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0'
    }
  };

  return (
    <div style={styles.appContainer}>
      <Header/>
      <h1>Meu App</h1>
      <Card title="Título" content="Conteúdo" />
      <TextoEstilizado />
      <Footer/>
    </div>
  );
}

export default App;
