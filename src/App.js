import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./Global";
import {useDarkMode} from "./components/UseDarkMode";
import Toggle from "./components/ToggleButton";
import Container from './components/Container';
import Tasklist from './components/Tasklist';

let idAcc = 0;
const generateID = () => {
  idAcc = idAcc + 1;
  return idAcc;
}

function App() {
  const [ tasks, setTasks ] = useState([]);

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

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
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <GlobalStyles />
        <nav>
          <span>Lista de Tarefas</span>
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </nav>
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
    </ThemeProvider>
  );
}

export default App;
