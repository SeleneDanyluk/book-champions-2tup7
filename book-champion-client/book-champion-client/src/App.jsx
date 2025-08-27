import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/notFound/NotFound';
import Protected from './components/protected/Protected';
import { useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Protected isSignedIn={loggedIn}>
                <Dashboard />
              </Protected>
            } />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
