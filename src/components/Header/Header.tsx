import React from "react";
import "./Header.scss";
import { HeaderMenu } from "./HeaderMenu";
import { motion, AnimatePresence } from "framer-motion";
type Props = {
  setPokemonType: (type: string) => void;
  pokemonType: string;
  setHasSortedInteraction: (has: boolean) => void;
  setIsOpenInfo: (arg: boolean) => void;
};

export const Header: React.FC<Props> = ({
  setPokemonType,
  pokemonType,
  setHasSortedInteraction,
  setIsOpenInfo,
}) => {
  const detailsVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: 100, transition: { duration: 0.2 } },
  };

  return (
    <header className='pokemon-header'>
      <AnimatePresence>
        <motion.div
          variants={detailsVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <h2 className='pokemon-header__title'>Pokedex</h2>
        </motion.div>
      </AnimatePresence>

      <HeaderMenu
        setPokemonType={setPokemonType}
        pokemonType={pokemonType}
        setHasSortedInteraction={setHasSortedInteraction}
        setIsOpenInfo={setIsOpenInfo}
      />
    </header>
  );
};
