import React from 'react';

function Header() {
return (
    <header style={headerStyle}>
    <h1>Gerenciador de tarefas</h1>
    </header>
);
}

const headerStyle = {
backgroundColor: '#FF0000',
color: 'white',
textAlign: 'center',
padding: '10px',
};

export default Header;