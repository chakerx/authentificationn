import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import ProfilePage from './Pages/ProfilePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route index element={<RegisterPage/>} />
        <Route path='/Login' element={<LoginPage/>} />
        <Route path='/Profile' element={<ProfilePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
