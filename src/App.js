import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Error from './components/Error/Error';
import Headers from './components/Headers/Headers';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Orders from './components/Orders/Orders';
import Parts from './components/Parts/Parts';

function App() {

  return (
    <div className=''>
      <Headers />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/parts' element={<Parts />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
