import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Register from './components/Register';

function App() {

  return(
        <div className='app'>
          <BrowserRouter>
          <div>
            <Link to=''>Home</Link>
            <Link to=''>About</Link>
            <Link to=''>Services</Link>
            <Link to=''>Contact us</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>
            <Routes>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
            </Routes>
          </BrowserRouter>
        </div>
  )

}

export default App;
