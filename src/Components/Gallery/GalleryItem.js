import propTypes from 'prop-types';

//функ toggleWatched анонимная - должна при клилке вернуть id кликнутого ел-та

const GalleryItem = ({ id, title, img, isWatched, toggleWatched }) => {
  return (
    <li key={id}>
      <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />
      <h2>{title}</h2>
      <p
        onClick={() => {
          toggleWatched(id);
        }}
      >
        Watched: {isWatched.toString()}
      </p>
    </li>
  );
};

GalleryItem.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  isWatched: propTypes.bool.isRequired,
  toggleWatched: propTypes.func.isRequired,
};

export default GalleryItem;
