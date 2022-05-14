import propTypes from 'prop-types';

const Button = ({ showFilms, isShown }) => {
  return (
    <button type="button" onClick={showFilms}>
      {isShown ? 'Hide' : 'Show'}
    </button>
  );
};

Button.propTypes = {
  showFilms: propTypes.func.isRequired,
  isShown: propTypes.bool.isRequired,
};

export default Button;
