import { Pokemon } from "../types/Pokemon";
import { PokemonListResponseData } from "../types/PokemonListResponse";


export const getPokemons = async (url: string): Promise<Pokemon[]> => {
    const response = await fetch(url);
    const data = await response.json();
    const pokemonPromises = data.results.map((result: PokemonListResponseData) => fetch(result.url));
    const responses = await Promise.all(pokemonPromises);
    const pokemonData = await Promise.all(responses.map((res) => res.json()));
    return pokemonData;
};