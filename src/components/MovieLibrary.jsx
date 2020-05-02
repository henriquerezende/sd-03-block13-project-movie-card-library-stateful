import React from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.implementMovie = this.implementMovie.bind(this);
    this.bookmarkedChange = this.bookmarkedChange.bind(this);
    this.textOrGenreChange = this.textOrGenreChange.bind(this);
    this.checkBookmarked = this.checkBookmarked.bind(this);
    this.checkGenre = this.checkGenre.bind(this);
    // this.filterMovies = this.filterMovies.bind(this);
  }

  bookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  textOrGenreChange(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  implementMovie(newMovie) {
    const { movies } = this.state;
    this.setState(({ movies: [...movies, newMovie] }));
  }

  checkBookmarked(elem) {
    const { bookmarkedOnly } = this.state;
    if (!bookmarkedOnly || (bookmarkedOnly && elem.bookmarked === true)) {
      return elem;
    }
    return false;
  }

  checkGenre(elem) {
    const { selectedGenre } = this.state;
    if ((elem.genre === selectedGenre) || !selectedGenre) return true;
    return false;
  }

  findMovies(movies) {
    const { searchText } = this.state;
    return movies.filter(
      (elem) => (
        elem.title.includes(searchText)
        || elem.storyline.includes(searchText)
        || elem.subtitle.includes(searchText))
        && this.checkBookmarked(elem)
        && this.checkGenre(elem),
    );
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.bookmarkedChange}
          searchText={searchText}
          onSearchTextChange={(event) => this.textOrGenreChange(event, 'searchText')}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.textOrGenreChange(event, 'selectedGenre')}
        />
        <MovieList movies={this.findMovies(movies)} />
        <AddMovie onClick={((obj) => this.implementMovie(obj))} />
      </div>
    );
  }
}

export default MovieLibrary;
