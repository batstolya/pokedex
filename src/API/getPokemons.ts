import { Pokemon } from "../types/Pokemon";
import { PokemonListResponseData } from "../types/PokemonListResponse";


export const getPokemons = async (offset: number): Promise<Pokemon[]> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${offset}`);
    const data = await response.json();
    const pokemonPromises = data.results.map((result: PokemonListResponseData) => fetch(result.url));
    const responses = await Promise.all(pokemonPromises);
    const pokemonData = await Promise.all(responses.map((res) => res.json()));
    return pokemonData;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while getting the pokemon data.');
  }
};

export const fetchData = async (urls: string[]) => {
  const results = [];

  for (const url of urls) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      results.push(data);
    } catch (error) {
      console.error(error);
    }
  }

  return results;
}

export const getUrlsPokemon = async (pokemonType: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${pokemonType}`);
  const data = await response.json();

  const urls = data.pokemon.map((itemPokemon: any) => itemPokemon.pokemon.url)
  return urls;
}

