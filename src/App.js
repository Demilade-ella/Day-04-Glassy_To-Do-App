import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Welcome from './components/Welcome';
import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <Router>
      <Routes className="App-header">
        <Route path='/' element={<Welcome />} />
        <Route path='/Todo' element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
