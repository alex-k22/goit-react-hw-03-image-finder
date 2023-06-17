import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import './Searchbar.css';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = e => {
    const { value } = e.currentTarget;
    this.setState({ query: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit({ query });
  };

  render() {
    return (
      <>
        <header className={css.Searchbar}>
          <form className={css.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.SearchFormButton}>
              <BsSearch />
              <span className={css['SearchForm-button-label']}>Search</span>
            </button>

            <input
              className={'SearchForm-input'}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleQueryChange}
              value={this.state.query}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};