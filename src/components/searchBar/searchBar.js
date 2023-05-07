import { fetchMoviesByQuery } from '../../helpers/FetchAPI.js';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Button, Input, ListItem } from './searchBar.styled';

const SearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (searchParams === '') return;

    setInputValue(searchParams.get('query') ?? '');

    async function fetchMovieList() {
      const movieList = await fetchMoviesByQuery(searchParams.get('query'));
      setMovies(movieList);
    }

    fetchMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const query = inputValue !== '' ? { query: inputValue } : {};
    setSearchParams(query);
    fetchMoviesByQuery(inputValue).then(setMovies).catch(console.error);
  };

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          name="query"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <Button type="sumbit">Search</Button>
      </form>
      <ul>
        {movies.map(({ id, title }) => (
          <ListItem key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </ListItem>
        ))}
      </ul>
    </>
  );
};

export default SearchBar;
