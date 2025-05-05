
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className='flex flex-col items-center h-full w-full bg-gradient-to-br  from-green-700 to-blue-800 via-yellow-900'>

      <Navbar />
      
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/cart' element={ <Cart />} />
      </Routes>
    </div>
  );
}

export default App;
