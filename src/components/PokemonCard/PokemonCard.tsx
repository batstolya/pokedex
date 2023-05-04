import React, { memo } from "react";
import { Pokemon } from "../../types/Pokemon";
import "./PokemonCard.scss";
import { colorsTypes, firstLetterToUpperCase } from "../../helpers/colorsTypes";
import { motion, AnimatePresence } from "framer-motion";

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

    const detailsVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    };

    return (
      <AnimatePresence>
        <motion.div
          className='pokemon-card'
          onClick={handleClickCard}
          variants={detailsVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <img
            className='pokemon-card__img'
            src={sprites.front_default}
            alt='img'
          />
          <h3 className='pokemon-card__name'>{firstLetterToUpperCase(name)}</h3>
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
        </motion.div>
      </AnimatePresence>
    );
  }
);
