import { fetchTrendMovies } from '../../helpers/FetchAPI.js';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ListItem } from './TrendingMoviesList.styled';

const TrendingMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendMovies().then(response => setMovies(response));
  }, []);

  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <ListItem key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </ListItem>
        ))}
      </ul>
    </>
  );
};

export default TrendingMoviesList;