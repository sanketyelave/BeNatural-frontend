import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './app/Hero';
import Products from './app/Products';
import Cart from './app/Cart';
import Mascara from './app/All-Products/Mascara';
import AddProductForm from './app/Components/Add';
import Blush from './app/All-Products/Blush';
import Concealer from './app/All-Products/Concealer';
import Eyeshadow from './app/All-Products/Eyeshadow';
import Eyeliner from './app/All-Products/Eyliner';
import Foundation from './app/All-Products/Foundation';
import Highlighter from './app/All-Products/Highlighter';
import Lipstick from './app/All-Products/Lipstick';
import Powder from './app/All-Products/Powder';
import Primer from './app/All-Products/Primer';
import Pencil from './app/All-Products/Pencil';
import LoadingPage from './app/Components/Loading';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mascara" element={<Mascara />} />
          <Route path="/blush" element={<Blush />} />
          <Route path="/Concealer" element={<Concealer />} />
          <Route path="/eyeshadow" element={<Eyeshadow />} />
          <Route path="/eyeliner" element={<Eyeliner />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/highlighter" element={<Highlighter />} />
          <Route path="/lipstick" element={<Lipstick />} />
          <Route path="/pencil" element={<Pencil />} />
          <Route path="/powder" element={<Powder />} />
          <Route path="/primer" element={<Primer />} />
          <Route path="/add" element={<AddProductForm />} />
          <Route path="/loading" element={<LoadingPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
