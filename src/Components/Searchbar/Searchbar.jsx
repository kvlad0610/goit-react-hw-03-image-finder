import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Searchbar({ onSubmit, onPage }) {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === '') {
      toast.error('Пустое поле');
      return;
    }
    onPage();
    onSubmit(name);
    setName('');
  }

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          value={name}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
