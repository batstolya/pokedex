import React, { memo } from "react";
import { PokemonCard } from "../PokemonCard";
import { Pokemon } from "../../types/Pokemon";
import "./PokemonList.scss";
import { animated, useSpring } from "react-spring";

type Props = {
  pokemons: Pokemon[];
  setPokemonId: (id: number) => void;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setIsOpenInfo: (arg: boolean) => void;
  hasSortedInteraction: boolean;
  setOffsetForType: React.Dispatch<React.SetStateAction<number>>;
};

export const PokemonList: React.FC<Props> = memo(
  ({
    pokemons,
    setPokemonId,
    setOffset,
    loading,
    setIsOpenInfo,
    hasSortedInteraction,
    setOffsetForType,
  }) => {
    const handleClick = () => {
      setOffset((prevOffset) => {
        return prevOffset + 12;
      });
    };

    const handleClick2 = () => {
      setOffsetForType((prevOffset) => {
        return prevOffset + 12;
      });
    };

    const fade = useSpring({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    });

    return (
      <animated.div style={fade}>
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

        {hasSortedInteraction ? (
          <button className='pokemon-list__button' onClick={handleClick2}>
            {loading ? "Loading..." : "Lead more"}
          </button>
        ) : (
          <button className='pokemon-list__button ' onClick={handleClick}>
            {loading ? "Loading..." : "Lead more"}
          </button>
        )}
      </animated.div>
    );
  }
);
