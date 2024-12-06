import React, { useState } from 'react';

const TaskContainer = () => {
  const [showTasks, setShowTasks] = useState(true);
  const [showDescription, setShowDescription] = useState({ 1: false, 2: false });

  const tasks = [
    { id: 1, title: 'Tarefa 1: Estudar React', description: 'Revisar conceitos de React para a aula.' },
    { id: 2, title: 'Tarefa 2: Praticar JavaScript', description: 'Resolver exercícios de JavaScript para reforçar o aprendizado.' }
  ];

  const toggleTasks = () => {
    setShowTasks(!showTasks);
  };

  const toggleDescription = (id) => {
    setShowDescription((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ padding: '10px' }}>
      <button onClick={toggleTasks} style={{ marginBottom: '20px', padding: '10px' }}>
        {showTasks ? 'Ocultar todas as tarefas' : 'Mostrar todas as tarefas'}
      </button>
      {showTasks &&
        tasks.map((task) => (
          <div key={task.id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <h3>{task.title}</h3>
            <button onClick={() => toggleDescription(task.id)} style={{ marginTop: '10px', padding: '5px' }}>
              {showDescription[task.id] ? 'Ocultar descrição' : 'Mostrar descrição'}
            </button>
            {showDescription[task.id] && <p>{task.description}</p>}
          </div>
        ))}
    </div>
  );
};

export default TaskContainer;
