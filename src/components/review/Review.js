import { fetchReviews } from '../../helpers/FetchAPI.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchReviews(id).then(response => {
      if (response.length === 0) setReviews(null);
      if (response.length > 0) setReviews(response);
    });
  }, [id]);

  return (
    <>
      {!reviews && <p>We don't have any rewiews for this movie </p>}
      {reviews && (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
