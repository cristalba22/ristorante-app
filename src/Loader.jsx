import { useEffect, useState } from "react";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 segundos
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <img
        src="platos/logo.png"
        alt="Loading..."
        className="h-24 w-24 animate-pulse"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://i.gifer.com/ZZ5H.gif"; // Spinner fallback
        }}
      />
      <p className="text-white mt-4 animate-bounce">Cargando...</p>
    </div>
  );
}

export default Loader;

