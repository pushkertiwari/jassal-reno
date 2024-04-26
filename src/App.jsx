import './App.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<Contact />} />
          <Route path='/services' element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
