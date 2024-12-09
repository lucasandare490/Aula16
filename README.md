# Documentação da aula 017

## Informações Gerais

-   **Data de Execução**: 06/12/2024
-   **Aluno**: Lucas André

----------

## Atualização do Projeto com Renderização Condicional e Eventos

Nesta aula, eu fiz novas mudanças no projeto para praticar **renderização condicional** e **eventos no React**. As principais atualizações foram:

-   Adicionei um botão para mostrar ou esconder todas as tarefas e para mostrar e esconder a descrição.
-   Alterei todo o design do site.
-   Usei **CSS inline** para deixar os novos botões e elementos com um visual simples e bem organizado.

----------

## Componente TaskContainer.js

### O que foi atualizado?

1.  **Mostrar e esconder todas as tarefas**:  
    Criei um botão que alterna entre mostrar ou esconder todas as tarefas de uma vez.
    
2.  **Manutenção dos títulos**:  
    Mantive os títulos "Tarefa 1" e "Tarefa 2" ao lado do nome completo das tarefas para manter a organização.
    

----------

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

### Código

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

----------

## Mudanças de Design

Além das funcionalidades básicas pedidas, eu também fiz várias melhorias no design para deixar o site mais organizado e agradável de usar. Entre as mudanças:

1.  **Fundo**: Usei um tom suave de azul (#F0F8FF).
2.  **Botões**: Tornei os botões mais atrativos, com cores como #1E90FF (azul vivo) e #4682B4 (azul médio).
3.  **Caixas de Tarefas**: Adicionei bordas arredondadas e mais espaçamento entre os itens. A largura das  
caixas foi ajustada para ficarem mais estreitas, criando um layout mais moderno e limpo.
4. **Centralização**: Centralizei todos os elementos na tela para melhorar a visualização.
5. **Adição de `border-bottom`**:  
Adicionei uma **borda inferior** (`border-bottom`) nas caixa principal. Essa borda separa o tema do site das tarefas de forma mais clara, melhorando a leitura e a organização. A borda foi aplicada com a cor `#FFD700` para dar um contraste.
----------

## Prints do site funcionando

![print2](https://github.com/user-attachments/assets/632068bc-534c-46e7-97b4-d630e021cfe5)


![print1](https://github.com/user-attachments/assets/d6dbaf64-3653-49ec-ba1c-3a4b593d1e0e)
