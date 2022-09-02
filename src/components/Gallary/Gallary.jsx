import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import style from "./Gallary.module.css";

const Gallary = ({ searchName, onClick }) => {
  const [heroes, setHeroes] = useState([]);
  const navigate = useNavigate();

  const fetchHeroes = useCallback(() => {
    if (searchName) {
      fetch(`https://swapi.py4e.com/api/people/?search=${searchName}`)
        .then((result) => result.json())
        .then((data) => data.results)
        .then(
          (heroes) => setHeroes(heroes)
          // console.log(heroes)
        );
    }
  }, [searchName]);

  useEffect(() => {
    fetchHeroes();
  }, [fetchHeroes]);

  return (
    <>
      <ol className={style.list}>
        {heroes.map((item) => (
          <li
            key={item.name}
            onClick={() => onClick(item)}
            className={style.item}
          >
            <Link to={`/gallery/modal?searchName=${item.name}`}>
              {item.name} - {item.gender}
            </Link>
          </li>
        ))}
      </ol>
      <button type="button" onClick={() => navigate("/")}>
        Back to search
      </button>
      <Outlet />
    </>
  );
};

export default Gallary;
