# Documentação da aula 017

## Informações Gerais
- **Data de Execução**: 06/12/2024
- **Aluno**: Lucas André

---

# Atualização do Projeto com Renderização Condicional e Eventos

Nesta aula, eu fiz novas mudanças no projeto para praticar **renderização condicional** e **eventos no React**. As principais atualizações foram:

- Adicionei um botão para mostrar ou esconder todas as tarefas e para mostrar e esconder a descrição.
- Mantive os títulos das tarefas (Tarefa 1 e Tarefa 2) junto com os nomes completos.
- Usei **CSS inline** para deixar os novos botões e elementos com um visual simples e bem organizado.

---

## Componente TaskContainer.js

### O que foi atualizado?
1. **Mostrar e esconder todas as tarefas**:  
   Criei um botão que alterna entre mostrar ou esconder todas as tarefas de uma vez.

2. **Manutenção dos títulos**:  
   Mantive os títulos "Tarefa 1" e "Tarefa 2" ao lado do nome completo das tarefas para manter a organização.

---

### Código Atualizado

```javascript
import React, { useState } from 'react';

const TaskContainer = () => {
  const [showTasks, setShowTasks] = useState(true);

  const tasks = [
    { id: 1, title: 'Tarefa 1: Estudar React', description: 'Revisar conceitos de React para a aula.' },
    { id: 2, title: 'Tarefa 2: Praticar JavaScript', description: 'Resolver exercícios de JavaScript para reforçar o aprendizado.' }
  ];

  const toggleTasks = () => {
    setShowTasks(!showTasks);
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
          </div>
        ))}
    </div>
  );
};

export default TaskContainer;
```
## Extra: Botões para Mostrar ou Esconder Descrições

Além do que foi pedido na atividade, eu adicionei uma funcionalidade extra. Agora, cada tarefa tem um botão que permite mostrar ou esconder a descrição individualmente.

### O que eu fiz?

1.  Adicionei um novo estado chamado `showDescription` para controlar a exibição da descrição de cada tarefa.
2.  Adicionei botões individuais para cada tarefa, com texto que muda entre "Mostrar descrição" e "Ocultar descrição".
3.  Usei **renderização condicional** para que as descrições só apareçam quando o botão for clicado.

### Código do Extra
```javascript
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
```

----------

## Estilização do Projeto

A estilização foi feita usando **CSS inline** diretamente nos componentes. Isso deixou o código mais simples e fácil de entender. Cada botão tem padding e margens para melhorar a organização visual e a usabilidade.

# Print do site funcionando (Atualizado)

![a](https://github.com/user-attachments/assets/6b4c15ea-b82b-46e2-ab55-f2840cbb1c3a)
![b](https://github.com/user-attachments/assets/74b25f08-f4e7-4617-a3bb-c3416e09eba1)