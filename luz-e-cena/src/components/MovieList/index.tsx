import React from "react";
import styles from "./MovieList.module.css";
import CardMovie from "../CardMovie";
import { Movie } from "../../types";

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  if (!movies || movies.length === 0) {
    return <p>Nenhum filme encontrado.</p>;
  }

  return (
    <ul className={styles.lista}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <CardMovie {...movie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;