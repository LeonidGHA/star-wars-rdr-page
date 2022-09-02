import { useState, useEffect, useCallback } from "react";
import style from "./Gallary.module.css";

const Gallary = ({ searchName, onClick }) => {
  const [heroes, setHeroes] = useState([]);

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
    <ol className={style.list}>
      {heroes.map((item) => (
        <li
          key={item.name}
          onClick={() => onClick(item)}
          className={style.item}
        >
          {item.name} - {item.gender}
        </li>
      ))}
    </ol>
  );
};

export default Gallary;
