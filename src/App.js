import logo from './logo.svg';
import './App.css';
import './components/Header.js'
import Header from './components/Header.js';
import Button from './components/Button.js';
import Tasks from './components/Tasks.js';
import {useState} from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Task1',
      day:'01/06/2021'
    },
    {
      id:2,
      text: 'Task2',
      day:'02/06/2021'
    }
  ])


  const deleteTask = (id) =>{
    setTasks((tasks.filter(task=> task.id !==id)));
  }


  return (
    <div className="container">
      <Header/>
      <Button name='Add'/>
      {
        tasks.length !==0 ?<Tasks tasks={tasks} onDelete={deleteTask}/> : 'No tasks'
      }
      
    </div>

  );
}

export default App;
