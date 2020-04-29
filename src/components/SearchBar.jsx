import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const input = e.target;
    this.setState({ name: input.value });
    console.log(this.state);
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <form>
          <fieldset>
            <legend>Search Movie</legend>
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SearchBar;
