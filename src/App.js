import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import NavBar from './components/NavBar';
import Register from './components/Register';
// import SignUp from './components/SignUp';
import Counter from './components/Counter'

const App = () => {

  return(
        <div className='app'>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/counter' element={<Counter username='admin'/>}/>
            </Routes>
          </BrowserRouter>
        </div>
  )

}

export default App;
