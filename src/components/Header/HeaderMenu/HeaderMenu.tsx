import React, { useCallback, useEffect, useState } from "react";
import "./HeaderMenu.scss";
import classNames from "classnames";
import { BurgerMenu } from "../../BurgerMenu";

type Props = {
  setPokemonType: (type: string) => void;
  pokemonType: string;
  setHasSortedInteraction: (has: boolean) => void;
  setIsOpenInfo: (arg: boolean) => void;
};

export const HeaderMenu: React.FC<Props> = ({
  setPokemonType,
  pokemonType,
  setHasSortedInteraction,
  setIsOpenInfo,
}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuOpening = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      setIsMenuOpened((current) => !current);
    },
    []
  );

  useEffect(
    () =>
      isMenuOpened
        ? document.body.classList.add("page--with-menu")
        : document.body.classList.remove("page--with-menu"),
    [isMenuOpened]
  );

  return (
    <div className='header__menu'>
      <button
        title='Menu'
        aria-label='menu button'
        type='button'
        className='header__menu-opener'
        onClick={(event) => handleMenuOpening(event)}
      >
        <div
          className={classNames("header__menu-icon", {
            "header__menu-icon--opened": isMenuOpened,
            "header__menu-icon--closed": !isMenuOpened,
          })}
        ></div>
      </button>
      <BurgerMenu
        isMenuOpen={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
        setPokemonType={setPokemonType}
        pokemonType={pokemonType}
        setHasSortedInteraction={setHasSortedInteraction}
        setIsOpenInfo={setIsOpenInfo}
      />
    </div>
  );
};
