import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <div className='relative min-h-screen w-full bg-[#0B1120] overflow-hidden'>
      {/* Animated background layers */}
      <div className='fixed inset-0 animated-bg'></div>
      
      {/* Glowing orbs */}
      <div className='fixed inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl glow-effect'></div>
        <div className='absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl glow-effect'></div>
      </div>

      {/* Gradient overlays */}
      <div className='fixed inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent'></div>
      <div className='fixed inset-0 bg-gradient-to-b from-[#0B1120] via-transparent to-transparent'></div>
      <div className='fixed inset-0 bg-gradient-to-r from-[#0B1120] via-transparent to-[#0B1120]'></div>
      
      {/* Content */}
      <div className='relative z-10'>
        <Navbar />
        <div className='pt-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
