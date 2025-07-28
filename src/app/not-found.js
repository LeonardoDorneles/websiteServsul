// src/app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white p-4 text-center">
      <h1 className="text-6xl md:text-8xl font-extrabold text-blue-500 mb-4">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Página Não Encontradan
      </h2>
      <p className="text-xl text-gray-400 mb-8 max-w-lg">
        Desculpe, não conseguimos encontrar a página que você está procurando.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}