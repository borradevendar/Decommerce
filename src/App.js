import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from "../src/pages/Auth/Login"
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/policy' element={<Policy/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<Pagenotfound/>}/>
        </Routes>

    </>
  );
}

export default App;
