import axios from 'axios';

export const apiTrendFilms = async () => {
  const films = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day`,
    {
      params: {
        api_key: '16c3209db9c8e0f5838703cf6ff99055',
      },
    }
  );
  return films;
};