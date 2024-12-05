import React from 'react';

function TaskContainer() {
  return (
    <div style={containerStyle}>
      <React.Fragment>
        <div style={taskStyle}>
          <h3>Tarefa 1: Planejar Viagem para Marte</h3>
          <p>Definir a lista de equipamentos necessários para a expedição ao planeta vermelho.</p>
        </div>
        <div style={taskStyle}>
          <h3>Tarefa 2: Preparar Cardápio Intergaláctico</h3>
          <p>Elaborar refeições compactas e nutritivas para os astronautas durante a viagem.</p>
        </div>
      </React.Fragment>
    </div>
  );
}

const containerStyle = {
  margin: '20px auto',
  padding: '10px',
  maxWidth: '600px',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
};

const taskStyle = {
  backgroundColor: '#fff',
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

export default TaskContainer;
