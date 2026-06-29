
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.jsx';
import UserDetails from './Pages/UserDetails.jsx';
import Navbar from './Components/Navbar.jsx';
import { DataProvider } from './context/DataContext.jsx';
import CreateUser from './Components/CreateUser.jsx';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname === '/';

  return (
    <DataProvider>
      <div className="App">
        {showNavbar && <Navbar />}
        <CreateUser />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/user/:id' element={<UserDetails />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
