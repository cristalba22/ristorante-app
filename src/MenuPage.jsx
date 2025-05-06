import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Dummy data (o podés importar el menú real desde otro archivo si querés)
const menu = {
  carnes: [
    { id: 1, nombre: 'Bife de Chorizo', precio: 5000, descripcion: 'Jugoso bife a la parrilla', imagen: '/platos/bife.jpg' },
    { id: 2, nombre: 'Costillar', precio: 6000, descripcion: 'Costillar cocido a fuego lento', imagen: '/platos/costillar.jpg' },
    { id: 3, nombre: 'Asado de Tira', precio: 5500, descripcion: 'Asado de tira a las brasas', imagen: '/platos/asado.jpg' },
    { id: 4, nombre: 'Matambre a la Pizza', precio: 5200, descripcion: 'Matambre al horno con salsa y queso', imagen: '/platos/matambre.jpg' }
  ],
  pastas: [
    { id: 5, nombre: 'Ñoquis', precio: 3500, descripcion: 'Ñoquis caseros con salsa boloñesa', imagen: '/platos/noquis.jpg' },
    { id: 6, nombre: 'Lasagna', precio: 4000, descripcion: 'Lasagna de carne y vegetales', imagen: '/platos/lasagna.jpg' },
    { id: 7, nombre: 'Fettuccine Alfredo', precio: 3700, descripcion: 'Fettuccine con crema y parmesano', imagen: '/platos/fettuccine.jpg' },
    { id: 8, nombre: 'Ravioles de Ricotta', precio: 3900, descripcion: 'Ravioles rellenos de ricotta y espinaca', imagen: '/platos/ravioles.jpg' }
  ],
  entradas: [
    { id: 9, nombre: 'Provoleta', precio: 2500, descripcion: 'Provoleta con orégano y oliva', imagen: '/platos/provoleta.jpg' },
    { id: 10, nombre: 'Bruschettas', precio: 2300, descripcion: 'Bruschettas de tomate y albahaca', imagen: '/platos/bruschetta.jpg' },
    { id: 11, nombre: 'Empanadas Criollas', precio: 2100, descripcion: 'Empanadas de carne cortada a cuchillo', imagen: '/platos/empanadas.jpg' }
  ],
  bebidas: [
    { id: 12, nombre: 'Vino Malbec', precio: 3000, descripcion: 'Botella de vino Malbec premium', imagen: '/platos/malbec.jpg' },
    { id: 13, nombre: 'Cerveza Artesanal', precio: 1800, descripcion: 'Cerveza rubia artesanal', imagen: '/platos/cerveza.jpg' },
    { id: 14, nombre: 'Agua Mineral', precio: 1000, descripcion: 'Agua sin gas', imagen: '/platos/agua.jpg' },
    { id: 15, nombre: 'Limonada', precio: 1200, descripcion: 'Limonada fresca', imagen: '/platos/limonada.jpg' }
  ],
  postres: [
    { id: 16, nombre: 'Flan Casero', precio: 2000, descripcion: 'Flan con dulce de leche', imagen: '/platos/flan.jpg' },
    { id: 17, nombre: 'Tiramisú', precio: 2500, descripcion: 'Postre italiano clásico', imagen: '/platos/tiramisu.jpg' },
    { id: 18, nombre: 'Helado Artesanal', precio: 2200, descripcion: 'Helado de crema artesanal', imagen: '/platos/helado.jpg' }
  ]
};

function MenuPage({ agregarAlPedido }) {
  const navigate = useNavigate();

  return (
    <div className="mt-24 p-4">
      <button
        onClick={() => navigate('/')}
        className="bg-black text-white px-6 py-2 rounded-full mb-6 hover:bg-gray-800 transition"
      >
        ← Volver a Inicio
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.keys(menu).map((categoria) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={categoria}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-xl font-bold mb-4 capitalize">{categoria}</h2>
            {menu[categoria].map((plato) => (
              <div key={plato.id} className="mb-4">
                <img src={plato.imagen} alt={plato.nombre} className="rounded-xl mb-2" />
                <h3 className="font-semibold">{plato.nombre} - ${plato.precio}</h3>
                <p className="text-gray-600 text-sm mb-2">{plato.descripcion}</p>
                <button
                  onClick={() => agregarAlPedido(plato)}
                  className="bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800 transition"
                >
                  Agregar
                </button>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
