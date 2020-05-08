import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: this.props.movies,
    }
    this.changeSearchText = this.changeSearchText.bind(this);
    this.changeBookmarked = this.changeBookmarked.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
    this.displayBookmarked = this.displayBookmarked.bind(this);
    this.displayBookmarked = this.displayBookmarked.bind(this);
    this.displayByGenre = this.displayByGenre.bind(this);
    this.displayByName = this.displayByName.bind(this);
  }

  changeSearchText(event) {
    const input = event.target.value
    this.setState({ searchText: input })
  }

  changeBookmarked() {
    this.setState(state => ({
      bookmarkedOnly: !state.bookmarkedOnly
    }))
  }

  changeGenre(event) {
    const input = event.target.value 
    this.setState({ selectedGenre: input })
  }

  displayBookmarked() {
    if (this.state.bookmarkedOnly === true) {
      return this.props.movies.filter(movie => movie.bookmarked === true)
    } else {
      return this.props.movies
    }
  }

  displayByGenre() {
    const filtered = this.displayBookmarked();
    if (this.state.selectedGenre === "") {
      return filtered
    } else {
      return filtered.filter(movie => movie.genre === this.state.selectedGenre)
    }
  }

  displayByName() {
    const filtered2 = this.displayByGenre()
    if (this.state.searchText === "") {
      return filtered2
    } else {
      return filtered2.filter(movie =>
        (movie.title.toLowerCase()).includes(this.state.searchText.toLowerCase())|| 
        (movie.subtitle.toLowerCase()).includes(this.state.searchText.toLowerCase())|| 
        (movie.storyline.toLowerCase()).includes(this.state.searchText.toLowerCase()) 
        === true)
    }
  }

  addMovie(state) {
    this.props.movies.push(state);
  }

  render() {
    const choosenMovies = this.displayByName();
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.changeSearchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.changeBookmarked}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.changeGenre}
        />
        <MovieList
          movies={choosenMovies}

        />
        <AddMovie onClick={this.addMovie}/>
      </div>
    );
  }
}

export default MovieLibrary;
