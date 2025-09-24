import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/notFound/NotFound';
import Protected from './components/protected/Protected';
import { useState } from 'react';
import { Navigate } from 'react-router';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='library' />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route element={<Protected isSignedIn={loggedIn} />}>
            <Route
              path='/library/*'
              element={
                <Dashboard onLogout={handleLogout} />
              }>
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
