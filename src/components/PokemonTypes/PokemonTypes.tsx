import React from "react";
import { iconsType } from "../../helpers/colorsTypes";
import { PokemonIcon } from "../PokemonIcon/PokemonIcon";
import "./PokemonTypes.scss";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  setPokemonType: (type: string) => void;
  setHasSortedInteraction: (has: boolean) => void;
  setIsOpenInfo: (arg: boolean) => void;
  pokemonType: string;
};

export const PokemonTypes: React.FC<Props> = ({
  setPokemonType,
  setHasSortedInteraction,
  setIsOpenInfo,
  pokemonType,
}) => {
  const detailsVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 100, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        className='pokemon-types'
        variants={detailsVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {iconsType.map((iconPath, index) => (
          <PokemonIcon
            key={index}
            path={iconPath.type}
            setPokemonType={setPokemonType}
            pokemonType={pokemonType}
            setHasSortedInteraction={setHasSortedInteraction}
            setIsOpenInfo={setIsOpenInfo}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
