import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import NavBar from './components/NavBar';
import Register from './components/Register';
// import SignUp from './components/SignUp';
import Counter from './components/Counter'
import COnderingRendUsingIf from './components/COnderingRendUsingIf';
import CondationalRendUsingTerOper from './components/CondationalRendUsingTerOper';
import CondationalRendUsingLogicalAnd from './components/CondationalRendUsingLogicalAnd';
import UseEffectHook from './components/UseEffectHook';
import FetchDataAxios from './components/FetchDataAxios';

const App = () => {

  return(
        <div className='app'>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/counter' element={<Counter username='admin'/>}/>
              <Route path='/ifcondition' element={<COnderingRendUsingIf />}/>
              <Route path='/ternarycondition' element={<CondationalRendUsingTerOper />}/>
              <Route path='/logicaland' element={<CondationalRendUsingLogicalAnd />}/>
              <Route path='/useeffecthook' element={<UseEffectHook />}/>
              <Route path='/fetchdata' element={<FetchDataAxios />}/>
            </Routes>
          </BrowserRouter>
        </div>
  )

}

export default App;
