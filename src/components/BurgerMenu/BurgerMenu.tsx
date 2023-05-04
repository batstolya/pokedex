import React, { memo } from "react";
import cn from "classnames";
import "./BurgerMenu.scss";
import { PokemonTypes } from "../PokemonTypes/PokemonTypes";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setPokemonType: (type: string) => void;
  pokemonType: string;
  setHasSortedInteraction: (has: boolean) => void;
  setIsOpenInfo: (arg: boolean) => void;
}

export const BurgerMenu: React.FC<Props> = memo(
  ({
    isMenuOpen,
    setIsMenuOpened,
    setPokemonType,
    pokemonType,
    setHasSortedInteraction,
    setIsOpenInfo,
  }) => {
    return (
      <div className={cn("burger-menu", { "burger-menu--active": isMenuOpen })}>
        <div className='burger-menu__icons'>
          <PokemonTypes
            setPokemonType={setPokemonType}
            setHasSortedInteraction={setHasSortedInteraction}
            setIsOpenInfo={setIsOpenInfo}
            pokemonType={pokemonType}
          />
        </div>
      </div>
    );
  }
);
