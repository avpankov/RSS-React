import React, { ChangeEvent } from 'react';
import searchIcon from '../assets/search.svg';

class SearchBar extends React.Component<{}, { searchInputValue: string }> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { searchInputValue: '' };
  }

  componentDidMount() {
    return this.setState({ searchInputValue: this.checkLocalStorage() });
  }

  checkLocalStorage() {
    return window.localStorage.getItem('searchInputValue') || '';
  }

  handleInputChange(event: ChangeEvent) {
    this.setState({ searchInputValue: (event.target as HTMLInputElement).value });
    window.localStorage.setItem('searchInputValue', (event.target as HTMLInputElement).value);
  }

  render() {
    return (
      <div className="w-[685px] flex flex-row relative py-6 mx-auto">
        <img
          src={searchIcon}
          width="20px"
          alt="Search icon"
          className="absolute top-[50%] translate-y-[-50%] ml-4 opacity-60"
        />
        <input
          type="text"
          value={this.state.searchInputValue}
          onChange={(event) => this.handleInputChange(event)}
          name="search"
          id="search"
          placeholder="Search..."
          className="w-[100%] h-[48px] p-4 pl-[45px] rounded-md border border-slate-200 outline-brand"
        />
      </div>
    );
  }
}

export default SearchBar;
