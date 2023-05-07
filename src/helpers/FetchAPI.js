import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = 'e921f15ae860f6e4269e7dedfe9b8c39';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendMovies = async () => {
  const response = await axios.get(`trending/movie/day?`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
};

export const fetchReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });

  return response.data.results;
};

fetchMovieDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

fetchCast.propTypes = {
  id: PropTypes.string.isRequired,
};

fetchReviews.propTypes = {
  id: PropTypes.string.isRequired,
};

fetchMoviesByQuery.propTypes = {
  id: PropTypes.string.isRequired,
};