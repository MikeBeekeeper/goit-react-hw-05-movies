import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SharedLayout = lazy(() => import(`./sharedLayout/SharedLayout.js`));
const HomePage = lazy(() => import(`../pages/homePage.js`));
const MoviesPage = lazy(() => import(`../pages/moviesPage.js`));
const MovieDetailsPage = lazy(() => import(`../pages/movieDetailsPage.js`));
const Cast = lazy(() => import(`../components/cast/cast.js`));
const Reviews = lazy(() => import(`../components/reviews/reviews.js`));

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
