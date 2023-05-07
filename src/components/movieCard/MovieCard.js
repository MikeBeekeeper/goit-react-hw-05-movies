import { Suspense } from 'react';
import { fetchMovieDetails } from '../../helpers/FetchAPI.js';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getImage } from '../../helpers/getImage.js';
import { AdditionalInfo, Info } from './MovieCard.styled';

const MovieCard = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();
  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  useEffect(() => {
    fetchMovieDetails(id).then(setMovieDetails);
  }, [id]);

  const getGanres = () => {
    if (genres) return genres.map(el => el.name).join(' ');
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <img src={getImage(poster_path)} alt="poster" width={240} />
        <Info>
          <h2>{title}</h2>
          <p>User score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{getGanres()}</p>
        </Info>
      </div>
      <AdditionalInfo>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </AdditionalInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieCard;
