import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from './Components/Content';
import HeroSection from './Components/HeroSection';
import Navigation from './Components/Navigation';
import {Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Addshop from './Components/Addshop'

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard"
        element={
          <div className='App'>
            <Navigation />
            <HeroSection />
            <Content />
          </div>}
      />

      <Route path='/dashboard/addShop' element={<Addshop/>}/>    
      {/* <Route path='/dashboard/editShop' element={<Editshop/>}/>     */}
    </Routes>
  );
}

export default App;
