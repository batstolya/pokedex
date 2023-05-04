import React, { useState } from "react";
import "./PokemonIcon.scss";
import classNames from "classnames";

type Props = {
  path: string;
  setPokemonType: (type: string) => void;
  pokemonType: string;
  setHasSortedInteraction: (has: boolean) => void;
  setIsOpenInfo: (arg: boolean) => void;
};

export const PokemonIcon: React.FC<Props> = ({
  path,
  setPokemonType,
  pokemonType,
  setHasSortedInteraction,
  setIsOpenInfo,
}) => {
  const [activePath, setActivePath] = useState<string | null>(null);

  const isActive = activePath === pokemonType;

  return (
    <div
      className={classNames(`pokemon-icon ${path}`, {
        "pokemon-icon--active": isActive,
      })}
      onClick={() => {
        setPokemonType(path);
        setHasSortedInteraction(true);
        setIsOpenInfo(true);
        setActivePath(path);
      }}
    >
      <img
        className='pokemon-icon__img'
        src={`${process.env.REACT_APP_ICONS_URL + path + ".svg"}`}
        alt={path}
      />
    </div>
  );
};
