import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Pedido({ pedido, total, finalizarPedido, pedidoFinalizado }) {
  const [observaciones, setObservaciones] = useState('');
  const navigate = useNavigate();

  if (pedidoFinalizado) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">¡Gracias por elegirnos!</h2>
        <p className="text-lg">Tu pedido ha sido recibido 🍽️</p>
        <Link to="/menu" className="mt-6 bg-black text-white px-6 py-3 rounded-full">
          Volver al Menú
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 mt-24">
      <button onClick={() => navigate('/menu')} className="mb-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
        ← Volver al Menú
      </button>
      <h2 className="text-2xl font-bold mb-4">Mi Pedido</h2>

      {pedido.length === 0 ? (
        <p>No agregaste platos aún.</p>
      ) : (
        <div>
          {pedido.map((plato, index) => (
            <div key={index} className="mb-2">
              {plato.nombre} - ${plato.precio}
            </div>
          ))}
          <div className="mt-4">
            <label className="font-semibold">Observaciones:</label>
            <textarea
              className="w-full mt-2 p-2 border rounded-lg"
              placeholder="¿Querés sacar o agregar algo?"
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-4 font-bold">Total: ${total}</div>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full">Abonar con MercadoPago</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Pagar con Tarjeta</button>
            <button className="bg-gray-600 text-white px-6 py-2 rounded-full" onClick={finalizarPedido}>
              Pagar en Efectivo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pedido;
