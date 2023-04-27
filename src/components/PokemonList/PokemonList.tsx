import React, { memo } from "react";
import { PokemonCard } from "../PokemonCard";
import { Pokemon } from "../../types/Pokemon";
import "./PokemonList.scss";

type Props = {
  pokemons: Pokemon[];
  setPokemonId: (id: number) => void;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setIsOpenInfo: (arg: boolean) => void;
};

export const PokemonList: React.FC<Props> = memo(
  ({ pokemons, setPokemonId, setOffset, loading, setIsOpenInfo }) => {
    const handleClick = () => {
      setOffset((prevOffset) => {
        return prevOffset + 12;
      });
    };

    return (
      <>
        <div className='pokemon-list'>
          {pokemons &&
            pokemons.map((pokemon) => (
              <PokemonCard
                pokemon={pokemon}
                setPokemonId={setPokemonId}
                setIsOpenInfo={setIsOpenInfo}
              />
            ))}
        </div>

        <button className='pokemon-list__button' onClick={handleClick}>
          {loading ? "Loading..." : "Lead more"}
        </button>
      </>
    );
  }
);
