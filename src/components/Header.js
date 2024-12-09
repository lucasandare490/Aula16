import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Gerenciador de Tarefas</h1>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#00008b', // Cor azul escuro
  padding: '20px',
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '28px',
  borderBottom: '4px solid #FFD700', // Borda dourada para destacar
};

export default Header;
