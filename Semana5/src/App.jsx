/*
Exemplo de useState:

const [filme, setFilme] = useState([]);     --> O que está dentro do parênteses indica qual o tipo
                                            de variável o useState irá começar. Neste caso,
                                            começamos com uma array vazia.

Exemplo de useEffect:

useEffect( ()=> {                           --> ()=> {} indica uma função anônima
  
}, []);                                     --> O conchetes no final da função, é um parâmetro 
                                            relacionado a este useEffect (poderia ser 'filme',
                                            por exemplo) 
*/

import React, { useEffect, useState } from 'react';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const API_KEY = '968a4ad8';

  useEffect(() => {
    const Movies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    Movies();
  }, [query]);

  return (
    <div className="min-h-screen bg-white w-full">
      <header className="bg-[#021d3a] p-4 w-screen">
        <h1 className="text-white text-xl font-bold text-left px-8">Lista de Filmes</h1>
      </header>

      <div className="px-8 py-6 w-full">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-7xl mx-auto">
          <input
            type="text"
            placeholder="Nome Filme"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 w-full rounded-full border border-orange-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-8 max-w-7xl mx-auto">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="bg-white border border-orange-500 rounded-xl p-3 shadow-md flex flex-col items-center">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
                alt={movie.Title}
                className="w-full h-32 object-cover rounded"
              />
              <div className="text-center mt-2">
                <p className="font-bold text-sm text-orange-500">{movie.Title}</p>
                <p className="text-xs">{movie.Type}</p>
                <p className="text-xs">{movie.Year}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">Nenhum filme encontrado</p>
        )}
      </div>

      <footer className="bg-[#021d3a] p-2 text-center text-white text-sm mt-8 w-screen">
        COPYRIGHT © 2024 - SERRA JUNIOR ENGENHARIA
      </footer>
    </div>
  );
}
