import React, { memo } from "react";
import { Pokemon } from "../../types/Pokemon";
import "./PokemonCard.scss";
import { colorsTypes } from "../../helpers/colorsTypes";

type Props = {
  pokemon: Pokemon;
  setPokemonId: (id: number) => void;
  setIsOpenInfo: (arg: boolean) => void;
};

export const PokemonCard: React.FC<Props> = memo(
  ({ pokemon, setPokemonId, setIsOpenInfo }) => {
    const { sprites, name, types } = pokemon;

    const handleClickCard = () => {
      setPokemonId(pokemon.id);
      setIsOpenInfo(false);
    };

    return (
      <div className='pokemon-card' onClick={handleClickCard}>
        <img
          className='pokemon-card__img'
          src={sprites.front_default}
          alt='img'
        />
        <h3 className='pokemon-card__name'>{name}</h3>
        <div className='pokemon-card__types'>
          {types.map((type) => (
            <div
              className='pokemon-card__type'
              style={{ background: colorsTypes[type.type.name] }}
            >
              {type.type.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
);
