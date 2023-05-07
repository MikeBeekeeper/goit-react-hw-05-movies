import PropTypes from 'prop-types';

export const getImage = image => {
  if (image) return `https://image.tmdb.org/t/p/w500${image}`;
};

getImage.propTypes = {
  image: PropTypes.string.isRequired,
};