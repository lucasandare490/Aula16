//. 1 codigo usado para criação de um site task da atividade de Thiago,
//siga essas anotações de cada função para fazer se guiar.
///ass.lucas
///Lembrete: mostrar pra renata

import React, { useState } from 'react';

const TaskContainer = () => {
  // Estado para controlar se as tarefas estão visíveis
  const [showTasks, setShowTasks] = useState(true);
  
  // Estado para controlar a visibilidade das descrições de cada tarefa
  const [showDescription, setShowDescription] = useState({ 1: false, 2: false });

  // Lista de tarefas com título e descrição
  const tasks = [
    { id: 1, title: 'Tarefa 1: Estudar React', description: 'Revisar conceitos de React para a aula.' },
    { id: 2, title: 'Tarefa 2: Praticar JavaScript', description: 'Resolver exercícios de JavaScript para reforçar o aprendizado.' }
  ];

  // Função que alterna a visibilidade de todas as tarefas
  const toggleTasks = () => {
    setShowTasks(!showTasks);
  };

  // Função que alterna a visibilidade da descrição de uma tarefa específica
  const toggleDescription = (id) => {
    setShowDescription((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={containerStyle}>
      {/* Botão que exibe "Ocultar todas as tarefas" ou "Mostrar todas as tarefas" baseado no estado */}
      <button onClick={toggleTasks} style={toggleButtonStyle}>
        {showTasks ? 'Ocultar todas as tarefas' : 'Mostrar todas as tarefas'}
      </button>

      {/* Renderiza as tarefas, se showTasks for verdadeiro */}
      {showTasks &&
        tasks.map((task) => (
          <div key={task.id} style={taskContainerStyle}>
            {/* Título de cada tarefa */}
            <h3>{task.title}</h3>

            {/* Botão que mostra ou oculta a descrição de cada tarefa */}
            <button onClick={() => toggleDescription(task.id)} style={taskButtonStyle}>
              {showDescription[task.id] ? 'Ocultar descrição' : 'Mostrar descrição'}
            </button>

            {/* Descrição da tarefa só aparece se showDescription for verdadeiro */}
            {showDescription[task.id] && <p>{task.description}</p>}
          </div>
        ))}
    </div>
  );
};

// Estilos

const containerStyle = {
  display: 'flex',  // Flexbox para organizar os itens
  alignItems: 'center',  // Alinha os itens no centro verticalmente
  flexDirection: 'column',  // Organiza os itens em coluna
  padding: '20px',  // Padding para dar espaçamento dentro do container
  backgroundColor: '#F0F8FF',  // Azul claro suave no fundo
  minHeight: '100vh',  // Altura mínima para garantir que a tela ocupe a altura toda
};

const toggleButtonStyle = {
  padding: '12px',  // Espaçamento dentro do botão
  marginTop: '30px',  // Espaço entre o botão e o conteúdo acima
  backgroundColor: '#1E90FF',  // Azul vivo para o botão
  border: 'none',  // Sem borda
  color: 'white',  // Cor do texto do botão
  fontSize: '16px',  // Tamanho da fonte
  borderRadius: '5px',  // Bordas arredondadas
  cursor: 'pointer',  // Cursor de mão ao passar o mouse
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Sombra para dar profundidade
};

const taskButtonStyle = {
  padding: '8px',  // Espaçamento dentro do botão da tarefa
  backgroundColor: '#4682B4',  // Azul médio para o botão da tarefa
  border: 'none',  // Sem borda
  color: 'white',  // Cor do texto
  fontSize: '14px',  // Tamanho da fonte
  borderRadius: '5px',  // Bordas arredondadas
  cursor: 'pointer',  // Cursor de mão
  marginTop: '15px',  // Espaçamento entre o botão e a descrição
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Sombra para dar profundidade
};

const taskContainerStyle = {
  marginBottom: '20px',  // Espaçamento entre as tarefas
  padding: '15px',  // Padding para o conteúdo dentro da tarefa
  backgroundColor: '#ADD8E6',  // Azul claro para o fundo das tarefas
  border: '2px solid #4682B4',  // Borda azul para as tarefas
  borderRadius: '10px',  // Bordas arredondadas
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Sombra para dar profundidade
  width: '80%',  // Largura das tarefas
  maxWidth: '500px',  // Tamanho máximo da largura
  textAlign: 'center',  // Centraliza o texto dentro da tarefa
  marginTop: '20px',  // Espaço entre o botão de mostrar/ocultar tarefas e a primeira tarefa
};

export default TaskContainer; ///exporta e finaliza o codigo
