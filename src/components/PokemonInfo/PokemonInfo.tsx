import React from "react";
import "./PokemonInfo.scss";
import { Pokemon } from "../../types/Pokemon";
import classNames from "classnames";

type Props = {
  pokemon: Pokemon;
  pokemonId: number;
  isVisible: boolean;
};

export const PokemonInfo: React.FC<Props> = ({
  pokemon,
  pokemonId,
  isVisible,
}) => {
  const { sprites, name, id, weight, moves, stats } = pokemon;

  let pokemonStatus = stats.map((item) => {
    const name = item.stat.name;
    const value = item.base_stat;

    return { name, value };
  });

  pokemonStatus = [
    ...pokemonStatus,
    { name: "weight", value: weight },
    { name: "moves", value: moves.length },
  ];

  let countId = String(id);
  if (id < 100) {
    countId = id < 10 ? `00${id}` : `0${id}`;
  }

  return (
    <div
      className={classNames("pokemon-info", {
        "pokemon-info__open": pokemon.id === pokemonId,
      })}
    >
      <div className='pokemon-info__wrapper'>
        <img
          className='pokemon-info__img'
          src={
            sprites.versions?.["generation-v"]["black-white"].animated
              .front_default
          }
          alt='pokemon__gif'
        />
      </div>

      <h3>
        {name} #{countId}
      </h3>
      <table>
        <tr>
          <td>Type</td>
          <td>Fire</td>
        </tr>
        {pokemonStatus.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
