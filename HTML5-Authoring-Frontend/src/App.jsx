
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';

import Login from './components/pages/login';
import Dashboard from './components/pages/dashboard';
import Courses from './components/pages/Courses';
import './App.css';

function App() {
  // const { isLoggedIn, login, logout } = useAuth();

  // console.log('Auth Context:', { isLoggedIn, login, logout });
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard/:username" element={<Dashboard />} />
        <Route path='/courses/:username' element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
