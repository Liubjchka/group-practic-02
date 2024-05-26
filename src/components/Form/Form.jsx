import { FiSearch } from 'react-icons/fi';
import style from "./Form.module.css"
import { useState } from 'react';

export const Form = ({onSubmit}) => {
  const [searchQuery, setSearchQuery] = useState("");

const handleChange = (evt) => {
  setSearchQuery(evt.target.value)
}
const handleSubmit = (evt) => {
  evt.preventDefault();
  if (!searchQuery.trim()) {
    return alert("can't be empty");
  }
  onSubmit(searchQuery);
  setSearchQuery("");
}


  return <form className={style.form} onSubmit={handleSubmit}>
  <button className={style.button} type="submit">
    <FiSearch size="16px" />
  </button>

  <input
  onChange={handleChange}
    className={style.input}
    placeholder="What do you want to write?"
    name="search"
    value={searchQuery}
    required
    autoFocus
  />
</form>;
};
