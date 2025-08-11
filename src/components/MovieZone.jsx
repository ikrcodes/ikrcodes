import React, { useEffect, useState } from 'react';

export default function MovieZone() {
  const [movies, setMovies] = useState([]); // ✅ State to store movies

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/discover/movie?api_key=e8058ec87c3186936955336fbde3676d'
        );
        const data = await response.json();
        setMovies(data.results); // ✅ Store data in state
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-xl font-bold mb-4'>Hello, this is a movie website</h1>
      <div className="max-w-[1170px] mx-auto grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="p-4 border rounded-lg shadow-md max-w-[300px] mx-auto text-center">
            <img 
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
              alt={movie.title} 
              className="w-[300px] h-auto rounded-md"
            />
            <h2 className="text-[22px] font-semibold mt-2 ">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
