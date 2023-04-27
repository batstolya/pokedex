import React, { useState } from "react";
import "./PokemonInfo.scss";
import { Pokemon } from "../../types/Pokemon";
import classNames from "classnames";
import { firstLetterToUpperCase } from "../../helpers/colorsTypes";

type Props = {
  pokemon: Pokemon;
  pokemonId: number;
  isOpenInfo: boolean;
  setIsOpenInfo: (arg: boolean) => void;
};

export const PokemonInfo: React.FC<Props> = ({
  pokemon,
  isOpenInfo,
  setIsOpenInfo,
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

  const handleClose = () => {
    setIsOpenInfo(!isOpenInfo);
  };

  return (
    <div
      className={classNames("pokemon-info", {
        "pokemon-info--close": isOpenInfo,
      })}
    >
      <div className='pokemon-info__close-button' onClick={handleClose}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path
            fill='#000000'
            d='M19.7,18.3c0.4,0.4,0.4,1,0,1.4C19.5,19.9,19.3,20,19,20s-0.5-0.1-0.7-0.3L10,11.4L1.7,19.7c-0.4,0.4-1,0.4-1.4,0s-0.4-1,0-1.4L8.6,10L0.3,1.7c-0.4-0.4-0.4-1,0-1.4C0.5,0.1,0.7,0,1,0s0.5,0.1,0.7,0.3L10,8.6l8.3-8.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L11.4,10L19.7,18.3z'
          />
        </svg>
      </div>

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
        {firstLetterToUpperCase(name)} #{countId}
      </h3>
      <table>
        <tr>
          <td>Type</td>
          <td>Fire</td>
        </tr>
        {pokemonStatus.map((item) => (
          <tr>
            <td>{firstLetterToUpperCase(item.name)}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
