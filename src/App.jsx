import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import MenuPage from './MenuPage';
import Loader from './Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pedido from './Pedido';


function App() {
  const [pedido, setPedido] = useState([]);
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const agregarAlPedido = (plato) => {
    setPedido([...pedido, plato]);
  };

  const totalPedido = pedido.reduce((total, plato) => total + plato.precio, 0);

  const finalizarPedido = () => {
    setPedido([]);
    setPedidoFinalizado(true);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-playfair">
        <Loader />
        <Navbar pedido={pedido} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<MenuPage agregarAlPedido={agregarAlPedido} />} />
          <Route path="/pedido" element={<Pedido pedido={pedido} total={totalPedido} finalizarPedido={finalizarPedido} pedidoFinalizado={pedidoFinalizado} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Navbar({ pedido }) {
  return (
    <nav className="bg-black fixed top-0 w-full text-white p-4 flex justify-between items-center z-50">
      <div className="flex items-center">
        <img src="platos/logo.png" alt="Logo" className="h-10 w-10 mr-2 rounded-full" />
        <h1 className="text-2xl font-bold">El Rincon de Mister</h1>
      </div>
      <div className="flex items-center">
        <Link to="/menu" className="mx-2 hover:underline">Menú</Link>
        <Link to="/pedido" className="relative mx-2">
          <FaShoppingCart size={24} />
          {pedido.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {pedido.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

function Landing() {
  return (
    <div className="h-screen bg-cover bg-center relative flex items-center justify-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center text-white px-6 flex flex-col items-center justify-center">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-4xl md:text-6xl font-bold mb-4">
          Bienvenido a Nuestro Restaurante
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="text-lg md:text-2xl mb-8">
          Descubrí sabores únicos. Elige, pide y disfruta.
        </motion.p>
        <Link to="/menu">
          <motion.button whileHover={{ scale: 1.1 }} className="bg-white text-black px-10 py-4 rounded-full font-semibold shadow-lg text-xl">
            Ver Menú
          </motion.button>
        </Link>
        <div className="flex gap-6 mt-8">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={32} className="hover:scale-125 transition-transform" />
          </a>
          <a href="https://instagram.com/tuinstagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} className="hover:scale-125 transition-transform" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4 mt-auto">
      © {new Date().getFullYear()} El Rincon de Mister. Todos los derechos reservados.
    </footer>
  );
}

export default App;
