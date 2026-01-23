import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import '../styles/Todo.css';

function Todo() {
    const navigate = useNavigate();

    const [task, setTask] = useState("");
    const [list, setList] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect (() => {
      localStorage.setItem("tasks", JSON.stringify(list));
    }, [list]);

    const handleAdd = () => {
      if (!task.trim()) return;

      const newItem = {
        id: Date.now(),
        text: task,
        completed: false,
      };

      setList([...list, newItem]);
      setTask("");
    };

    const toggleComplete = (id) => {
      setList(list.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ));
    };

    const deleteTask = (id) => {
      setList(list.filter(item => item.id !== id));
    };

  return (
    <div className='todo'>
      <div className='todo-container'>
        <form onSubmit={handleAdd} className='input-group'>
          <input
              type='text'
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder='Design a new task...'
              className='input'
          />
          <button type='submit' className='add-btn'> + </button>
        </form>

        <div className='task-list'>
          {list.map((item) => (
            <div key={item.id} className={`task-card ${item.completed ? 'done' : ''}`}>

              <div className='task-content' onClick={() => toggleComplete(item.id)}>
                {item.completed ? (
                  <CheckCircleIcon className='check-icon completed' />
                ) : (
                  <RadioButtonUncheckedIcon className='check-icon' />
                )}
              <span className='task-text'> {item.text} </span>
              </div>
              <button onClick={() => deleteTask(item.id)} className='delete-btn'> <ClearIcon  className='del-icon'/> </button>
            </div>
          ))}
        </div>
      </div>

      <div className='todo-bottom'>
        <button onClick={() => navigate ("/")} className='prev-btn'> Prev <span className='navi-icons'> <ArrowBackIosIcon className='icon' /> <ArrowBackIosIcon className='icon' /> </span></button>
      </div>
    </div>
  )
}

export default Todo;
