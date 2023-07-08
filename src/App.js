import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListCryptos from './components/ListCryptos';
import NavMenu from './components/NavMenu';
import About from './components/pages/About';
import Page404 from './components/pages/Page404';
import Details from './components/pages/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<ListCryptos />} />
          <Route path="/about" element={<About />} />
          <Route path="details/:name" element={<Details />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
