import React, { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Container from './components/Container';
import Tasklist from './components/Tasklist';

let idAcc = 0;
const generateID = () => {
  idAcc = idAcc + 1;
  return idAcc;
}

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (title, state) => {
      const newTask = {
        id: generateID(),
        title, 
        state
      };
      setTasks((existingTasks) => {
        return [...existingTasks, newTask];
      })
    }

    const updateTask = (id, title, state) => {
      setTasks((existingTasks) => {
        return existingTasks.map((task) => {
          if (task.id === id) {
            return { ...task, title, state };
          } else {
            return task;
          }
        });
      });
    }

    const deleteTask = (id) => {
      setTasks((existingTasks) => {
        return existingTasks.filter((task) => task.id !== id);
      })
    }

  return (
    <div className="App">
      <NavBar />
      <Container>
        <Tasklist 
          title="pendente" 
          taskState="Pendente"
          onAddTask={addTask} 
          tasks={tasks.filter((task) => task.state === "Pendente")} 
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <Tasklist 
          title="fazendo" 
          taskState="Fazendo"
          onAddTask={addTask} 
          tasks={tasks.filter((task) => task.state === "Fazendo")} 
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <Tasklist 
          title="completo" 
          taskState="Completo"
          onAddTask={addTask} 
          tasks={tasks.filter((task) => task.state === "Completo")} 
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </Container>
    </div>
  );
}

export default App;
