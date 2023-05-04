export const colorsTypes: Record<string, string> = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

export const iconsType: { type: string, label: string }[] = [
  { type: 'normal', label: 'normal' },
  { type: 'fire', label: 'fire' },
  { type: 'water', label: 'water' },
  { type: 'electric', label: 'electric' },
  { type: 'grass', label: 'grass' },
  { type: 'ice', label: 'ice' },
  { type: 'fighting', label: 'fighting' },
  { type: 'poison', label: 'poison' },
  { type: 'ground', label: 'ground' },
  { type: 'flying', label: 'flying' },
  { type: 'psychic', label: 'psychic' },
  { type: 'bug', label: 'bug' },
  { type: 'rock', label: 'rock' },
  { type: 'ghost', label: 'ghost' },
  { type: 'dragon', label: 'dragon' },
  { type: 'dark', label: 'dark' },
  { type: 'steel', label: 'steel' },
  { type: 'fairy', label: 'fairy' }
];

export const firstLetterToUpperCase = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}