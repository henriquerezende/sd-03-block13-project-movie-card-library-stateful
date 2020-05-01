// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
    searchText, bookmarkedOnly, selectedGenre, onBookmarkedChange,
    onSearchTextChange, onSelectedGenreChange
    } = this.props;
    return (
      <fieldset className="formFilter">
        <legend>Procurar filmes</legend>
        <form>
          <label htmlFor="input">Inclui o texto:
            <input type="text" onChange={onSearchTextChange} value={searchText}/>
          </label>
          <div>
            <label htmlFor="input">Mostrar somente favoritos</label>
            <input type="checkbox" onChange={onBookmarkedChange} checked={bookmarkedOnly}/>
          </div>
          <div>
            <label htmlFor="select">Filtrar por gênero</label>
            <select value={selectedGenre} onChange={onSelectedGenreChange}>
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </div>
        </form>
      </fieldset>
    );
  }
}

export default SearchBar;