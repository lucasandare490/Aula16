# Documentação da aula 016

## Informações Gerais
- *Data de Execução*: 04/12/2024
- *Aluno*: Lucas André

---

# Configuração do Projeto com React

## Passos Realizados

### Aula 16 - Criando um Gerenciador de Tarefas com React

## Descrição das Alterações

Nesta aula, realizamos várias alterações no projeto para configurar um gerenciador de tarefas utilizando componentes React. As principais mudanças realizadas foram:

- Criamos o componente `Header` para exibir o título "Task Manager".
- Criamos o componente `TaskContainer` para exibir uma lista de tarefas fictícias, com títulos e descrições.
- Modificamos o arquivo `App.js` para importar e renderizar os componentes `Header` e `TaskContainer`.
- Utilizamos **CSS inline** para estilizar os componentes diretamente dentro de cada arquivo, garantindo um layout simples e funcional.

---

## Componente Header.js

*Descrição*: O componente `Header` é responsável por exibir o título do projeto, "Task Manager", na parte superior da aplicação.

### Perguntas e Respostas

1. **Quais os imports utilizados?**
   - React: Importa o React necessário para criar o componente.
   
2. **O que o componente faz?**
   - Renderiza um cabeçalho com o título "Task Manager", centralizado na tela e com uma cor de fundo.

3. **Como o estilo foi aplicado?**
   - O estilo foi aplicado diretamente no componente através de um objeto JavaScript, utilizando a propriedade `style`.

---

## Componente TaskContainer.js

*Descrição*: O componente `TaskContainer` é responsável por renderizar as tarefas. Ele contém uma lista de tarefas fictícias, com seus respectivos títulos e descrições.

### Perguntas e Respostas

1. **Quais os imports utilizados?**
   - React: Necessário para criar o componente e renderizar os elementos JSX.

2. **Como as tarefas são exibidas?**
   - As tarefas são renderizadas diretamente no componente como elementos JSX. Cada tarefa é representada por uma `div`, com o título e descrição.

3. **Por que usamos `React.Fragment`?**
   - O `React.Fragment` é utilizado para agrupar os elementos das tarefas sem adicionar um nó extra no DOM, mantendo a estrutura limpa.

4. **Como o layout foi estilizado?**
   - Cada tarefa foi estilizada com CSS inline, aplicando uma borda, fundo branco e espaçamento entre os itens.

---

## App.js

*Descrição*: O `App.js` é o ponto de entrada do aplicativo, onde os componentes `Header` e `TaskContainer` são importados e renderizados.

### Perguntas e Respostas

1. **O que o arquivo `App.js` faz?**
   - Ele importa os componentes `Header` e `TaskContainer` e os exibe na interface.

2. **Como o componente `TaskContainer` é renderizado?**
   - O componente `TaskContainer` é renderizado diretamente no JSX do `App.js`, sem a necessidade de passar dados entre os componentes, pois ele contém dados fixos (tarefas fictícias).

---

## Estilização do Projeto

A estilização foi feita com CSS inline, diretamente nos componentes, para garantir uma abordagem simples e funcional. Cada componente tem seu estilo único, o que facilita a manutenção e leitura do código.

---

## Como Rodar o Projeto

Para rodar o projeto localmente, siga os seguintes passos:

1. **Instalar as dependências:**
   Se você ainda não instalou as dependências, rode o comando abaixo no terminal:

   ```bash
   npm install

## Visualização do Projeto

**Aqui está uma captura de tela do projeto em funcionamento:**

![Print do site](public/site_funcionando.png)

