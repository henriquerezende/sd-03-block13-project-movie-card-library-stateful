import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.clicando = this.clicando.bind(this);
  }
  updateState(event) {
    const { value } = event.target;
    this.setState(
      {
        subtitle: value,
        title: value,
        imagePath: value,
        storyline: value,
        rating: parseFloat(value),
        genre: value,
      },
    );
  }

  clicando() {
    this.props.onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <div><form><label htmlFor="title">Título
          <input
            onChange={(e) => this.setState({ title: e.target.value })}
            type="text" id="title" value={this.state.title}
        />
      </label>
        <label htmlFor="subtitle">Subtítulo
            <input
              onChange={(e) => this.setState({ subtitle: e.target.value })}
              type="text" id="subtitle" value={this.state.subtitle} />
        </label>
        <label htmlFor="image">Imagem
            <input
              onChange={(e) => this.setState({ imagePath: e.target.value })}
              type="text" id="image" value={this.state.imagePath} />
        </label>
        <label>Sinopse
          <textarea value={this.state.storyline} onChange={(e) =>
            this.setState({ storyline: e.target.value })}></textarea>
        </label>
        <label htmlFor="rating">Avaliação
            <input type="number" id="rating" value={this.state.rating}
            onChange={(e) => this.setState({ rating: parseFloat(e.target.value) })} />
        </label>
        <label htmlFor="gender">Gênero
            <select id="gender" value={this.state.genre}
            onChange={(e) => this.setState({ genre: e.target.value })}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={this.clicando}>Adicionar filme</button></form></div>
    );
  }
}

export default AddMovie;
