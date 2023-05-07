import { fetchCast } from 'helpers/FetchAPI';
import { getImage } from 'helpers/getImage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Text } from './cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCast(id).then(setCast);
  }, [id]);

  return (
    <div>
      {cast.map(({ name, id, profile_path, character }) => (
        <li key={id}>
          <img src={getImage(profile_path)} alt={name} width={80} />
          <Text>{name}</Text>
          <Text>Character: {character}</Text>
        </li>
      ))}
    </div>
  );
};

export default Cast;
