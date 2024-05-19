import './App.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import AboutUs from './components/about';
import Services from './components/services';
import Team from './components/team';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/team' element={<Team />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
