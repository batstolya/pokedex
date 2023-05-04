import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

import ReactLoading from "react-loading";
import "./App.scss";
import { PokemonList } from "./components/PokemonList";
import { Pokemon } from "./types/Pokemon";
import { Header } from "./components/Header";
import { PokemonInfo } from "./components/PokemonInfo";
import { fetchData, getPokemons, getUrlsPokemon } from "./API/getPokemons";
import classNames from "classnames";

const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonUrls, setPokemonUrls] = useState<string[]>([]);

  const [offset, setOffset] = useState(0);
  const [pokemonId, setPokemonId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOpenInfo, setIsOpenInfo] = useState(true);

  const [pokemonType, setPokemonType] = useState("");
  const [offsetForType, setOffsetForType] = useState(0);

  const [hasSortedInteraction, setHasSortedInteraction] = useState(false);

  useEffect(() => {
    console.log("render 1");
    const fetchPokemonsData = async () => {
      try {
        setLoading(true);
        const pokemonData = await getPokemons(offset);
        setPokemons((prevPokemon: Pokemon[]) => [
          ...prevPokemon,
          ...pokemonData,
        ]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonsData();
  }, [offset]);

  useEffect(() => {
    setOffsetForType(0);
    const fetchPokemonsByType = async () => {
      try {
        setLoading(true);

        const urls = await getUrlsPokemon(pokemonType);
        setPokemonUrls(urls);

        const pokemonData = await fetchData(
          urls.slice(offsetForType, offsetForType + 12)
        );
        setPokemons(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonsByType();
  }, [pokemonType]);

  useEffect(() => {
    const fetchPokemonsByType = async () => {
      try {
        setLoading(true);
        const pokemonData = await fetchData(
          pokemonUrls.slice(offsetForType, offsetForType + 12)
        );

        setPokemons((prevPokemon: Pokemon[]) => [
          ...prevPokemon,
          ...pokemonData,
        ]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonsByType();
  }, [offsetForType]);

  let loadingShowCondition = false;
  if (offsetForType === 0 && pokemonType !== "") {
    loadingShowCondition = loading;
  } else {
    loadingShowCondition = false;
  }

  const pokemon = pokemons.find((pokemon) => pokemon.id === pokemonId);
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
  return (
    <animated.div className='App' style={fade}>
      <Header
        setPokemonType={setPokemonType}
        pokemonType={pokemonType}
        setHasSortedInteraction={setHasSortedInteraction}
        setIsOpenInfo={setIsOpenInfo}
      />
      <div className='container'>
        <div
          className={classNames("pokemon__wrapper", {
            "pokemon__wrapper--open": !isOpenInfo,
          })}
        >
          {loadingShowCondition ? (
            <ReactLoading
              className='loader'
              type='spin'
              color='#e4640a'
              height={100}
              width={100}
            />
          ) : (
            <PokemonList
              pokemons={pokemons}
              setPokemonId={setPokemonId}
              setOffset={setOffset}
              loading={loading}
              setIsOpenInfo={setIsOpenInfo}
              hasSortedInteraction={hasSortedInteraction}
              setOffsetForType={setOffsetForType}
            />
          )}
        </div>

        {pokemonId && pokemon && (
          <PokemonInfo
            pokemon={pokemon}
            pokemonId={pokemonId}
            isOpenInfo={isOpenInfo}
            setIsOpenInfo={setIsOpenInfo}
          />
        )}
      </div>
    </animated.div>
  );
};

export default App;
