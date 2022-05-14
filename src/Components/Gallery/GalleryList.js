import propTypes from 'prop-types';
import GalleryItem from './GalleryItem';

const GalleryList = ({ movies, toggleWatched }) => {
  return (
    <ul>
      {movies.map(({ img, title, id, isWatched }) => (
        <GalleryItem
          img={img}
          title={title}
          id={id}
          key={id}
          isWatched={isWatched}
          toggleWatched={toggleWatched}
        />
      ))}
    </ul>
  );
};

GalleryList.propTypes = {
  toggleWatched: propTypes.func.isRequired,
  movies: propTypes.arrayOf(
    propTypes.shape({
      img: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
      isWatched: propTypes.bool.isRequired,
    }),
  ),
};

export default GalleryList;
