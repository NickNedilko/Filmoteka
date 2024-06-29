import axios from 'axios';

export const apiTrendFilms = async (page) => {
  const films = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing`,
    {
      params: {
        api_key: '16c3209db9c8e0f5838703cf6ff99055',
        page
      },
    }
  );
  return films;
};

export const apiUpComingFilms = async (page) => {
  const films = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming`,
    {
      params: {
        api_key: '16c3209db9c8e0f5838703cf6ff99055',
        page
      },
    }
  );
  return films;
};


export const apiTopRatedFilms = async (page) => {
  const films = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated`,
    {
      params: {
        api_key: '16c3209db9c8e0f5838703cf6ff99055',
        page
      },
    }
  );
  return films;
};


export const apiSearchFilms = async (search, page) => {
  const films = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
    params: {
      api_key: '16c3209db9c8e0f5838703cf6ff99055',
      query: search,
      page,
    },
  });
  return films;
};


export const apiFilmById = async filmId => {
  const films = await axios.get(
    `https://api.themoviedb.org/3/movie/${filmId}`,
    {
      params: {
        api_key: '16c3209db9c8e0f5838703cf6ff99055',
      },
    }
  );
  return films;
};

export const apiImagesById = async filmId => {
  const images = await axios.get(
    `https://api.themoviedb.org/3/movie/${filmId}/images`,
    {
      params: {
        api_key: '16c3209db9c8e0f5838703cf6ff99055',
      },
    }
  );
  return images;
};




export const apiCastById = async filmId => {
  const cast = await axios.get(
    `https://api.themoviedb.org/3/movie/${filmId}/credits`,
    {
      params: {
        api_key: '16c3209db9c8e0f5838703cf6ff99055',
      },
    }
  );
  return cast;
};

export const apiReviewsById = async filmId => {
  const reviews = await axios.get(
    `https://api.themoviedb.org/3/movie/${filmId}/reviews`,
    {
      params: {
        api_key: '16c3209db9c8e0f5838703cf6ff99055',
      },
    }
  );
  return reviews;
};



export const apiVideoById = async (filmId) => {
  const video = await axios.get(
    `https://api.kinocheck.de/movies?tmdb_id=${String(filmId)}`,
   
  );
  return video;
};