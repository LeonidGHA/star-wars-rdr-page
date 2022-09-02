import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const onFormSubmit = (name) => {
    dispatch({ type: "searchName", payload: name });
    navigate("/gallery");
  };

  const onClick = (hero) => dispatch({ type: "hero", payload: hero });

  const onClose = () => {
    dispatch({ type: "resetHero" });
    navigate("/gallery");
  };

  const HeroModal = () => {
    if (hero) {
      const { name, gender, birth_year, hair_color, skin_color } = hero;

      return (
        <Modal onClose={onClose}>
          <span>{name}</span>
          <span>{gender}</span>
          <span>{birth_year}</span>
          <span>{hair_color}</span>
          <span>{skin_color}</span>{" "}
          <button type="button" onClick={() => navigate("/gallery")}>
            Back to gallery
          </button>
        </Modal>
      );
    } else {
      return (
        <button type="button" onClick={() => navigate("/")}>
          Back to search
        </button>
      );
    }
  };

  return (
    <Routes>
      <Route path="/" element={<SerchBar onFormSubmit={onFormSubmit} />} />
      <Route
        path="/gallery"
        element={<Gallary searchName={searchName} onClick={onClick} />}
      >
        <Route path="modal" element={<HeroModal />} />
      </Route>
      <Route
        path="*"
        element={
          <div>
            <h2>Page not Found</h2>
            <button type="button" onClick={() => navigate("/")}>
              Back to search
            </button>
          </div>
        }
      />
    </Routes>
  );
};

export default App;
