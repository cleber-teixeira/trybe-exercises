import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const items = ['Ler os enunciados;', 'Realizar os requisitos;', 'Adicionar ao stage do git;', "Fazer os commit's; e", 'Realizar o push.'];

const mapTasks = arrayItems => arrayItems.map(item => task(item));

function App() {
  return (
    <div>
      <h3 className='title'>Lista de Tarefas</h3>
      <h4 className='subtitle'>cleber-app</h4>
      <ul>{mapTasks(items)}</ul>
    </div>
  );
}

export default App;
