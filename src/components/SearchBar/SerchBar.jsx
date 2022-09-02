import { useState } from "react";
import style from "./SearchBar.module.css";

const SerchBar = ({ onFormSubmit }) => {
  const [name, setName] = useState("");

  const onFormSearch = (event) => {
    event.preventDefault();
    onFormSubmit(name);
    setName("");
  };

  return (
    <form onSubmit={onFormSearch} className={style.form}>
      <label>
        <input
          type="text"
          value={name}
          className={style.input}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>
    </form>
  );
};

export default SerchBar;
