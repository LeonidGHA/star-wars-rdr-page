import { useReducer } from "react";
import SerchBar from "./components/SearchBar/SerchBar";
import Gallary from "./components/Gallary/Gallary";
import Modal from "./components/Modal/Modal";

const initialState = {
  searchName: "",
  hero: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "searchName":
      return { ...state, searchName: payload };

    case "hero":
      return { ...state, hero: payload };

    case "resetHero":
      return { ...state, hero: null };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { searchName, hero } = state;

  const onFormSubmit = (name) =>
    dispatch({ type: "searchName", payload: name });

  const onClick = (hero) => dispatch({ type: "hero", payload: hero });

  const onClose = () => dispatch({ type: "resetHero" });

  if (hero) {
    const { name, gender, birth_year, hair_color, skin_color } = hero;
    return (
      <Modal onClose={onClose}>
        <span>{name}</span>
        <span>{gender}</span>
        <span>{birth_year}</span>
        <span>{hair_color}</span>
        <span>{skin_color}</span>
      </Modal>
    );
  }
  return (
    <div>
      <SerchBar onFormSubmit={onFormSubmit} />

      <Gallary searchName={searchName} onClick={onClick} />
    </div>
  );
};

export default App;
