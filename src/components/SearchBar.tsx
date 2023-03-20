import React, { ChangeEvent } from 'react';
import searchIcon from '../assets/icons/search.svg';

class SearchBar extends React.Component<Record<string, never>, { searchInputValue: string }> {
  componentDidMount() {
    const value = localStorage.getItem('searchInputValue');
    if (!value) return;
    if (value) this.setState({ searchInputValue: value });
  }

  componentWillUnmount() {
    if (!this.state) return;
    localStorage.setItem('searchInputValue', this.state.searchInputValue);
  }

  checkLocalStorage() {
    return this.state ? this.state.searchInputValue : '';
  }

  handleInputChange(event: ChangeEvent) {
    this.setState({ searchInputValue: (event.target as HTMLInputElement).value });
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
          value={this.checkLocalStorage()}
          onChange={(event) => this.handleInputChange(event)}
          name="search"
          id="search"
          placeholder="Search"
          className="w-[100%] h-[48px] p-4 pl-[45px] rounded-md border border-slate-200 outline-brand"
        />
      </div>
    );
  }
}

export default SearchBar;
