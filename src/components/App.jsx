import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SharedLayout = lazy(() => import(`./sharedLayout/SharedLayout.js`));
const HomePage = lazy(() => import(`../pages/HomePage.js`));
const MoviesPage = lazy(() => import(`../pages/MoviesPage.js`));
const MovieDetailsPage = lazy(() => import(`../pages/MovieDetailsPage.js`));
const Cast = lazy(() => import(`./cast/Cast.js`));
const Reviews = lazy(() => import(`./reviews/Review.js`));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
