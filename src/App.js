import React, { Component } from 'react';
import movies from './data/movies.json';
import { mapper } from './utils/mapper'; // export const ...(mapper)
import Button from './Components/Button'; // export default ...(Button)
import GalleryList from './Components/Gallery/GalleryList';

class App extends Component {
  state = {
    movies: mapper(movies),
    isShown: false,
  };

  showFilms = () => {
    this.setState(prevState => ({
      isShown: !prevState.isShown,
    }));
  };

  // метод изменения состояния(state) по клику
  // принимает id кликнутого ел-та
  toggleWatched = id => {
    this.setState(prevState => ({
      movies: prevState.movies.map(movie => {
        if (movie.id === id) {
          return { ...movie, isWatched: !movie.isWatched };
        }
        return movie;
      }),
    }));
  };

  render() {
    const { movies, isShown } = this.state;
    return (
      <>
        <Button showFilms={this.showFilms} isShown={isShown} />
        {isShown && (
          <GalleryList movies={movies} toggleWatched={this.toggleWatched} />
        )}
      </>
    );
  }
}

export default App;
