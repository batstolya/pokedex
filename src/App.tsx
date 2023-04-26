import React, { useEffect, useState } from "react";

import "./App.scss";
import { PokemonList } from "./components/PokemonList";
import { Pokemon } from "./types/Pokemon";
import { Header } from "./components/Header";
import { PokemonInfo } from "./components/PokemonInfo";
import { getPokemons } from "./API/getPokemons";

const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [pokemonId, setPokemonId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOpenInfo, setIsOpenInfo] = useState(true);

  useEffect(() => {
    console.log("render 1");

    const fetchPokemonsData = async () => {
      try {
        setLoading(true);
        const pokemonData = await getPokemons(
          `https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${offset}`
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

    fetchPokemonsData();
  }, [setPokemons, offset]);
  console.log(loading);

  const pokemon = pokemons.find((pokemon) => pokemon.id === pokemonId);

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <div className='pokemon__wrapper'>
          <PokemonList
            pokemons={pokemons}
            setPokemonId={setPokemonId}
            setOffset={setOffset}
            loading={loading}
            setIsOpenInfo={setIsOpenInfo}
          />
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
    </div>
  );
};

export default App;