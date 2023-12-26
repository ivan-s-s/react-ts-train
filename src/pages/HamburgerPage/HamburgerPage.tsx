import { useState } from "react";
import type { FC } from "react";
import { Hamburger } from "ui-kit";

export const HamburgerPage: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prevState?:boolean) => !prevState);
  };

  return (
    <section>
      <h2>Hamburger</h2>
      <Hamburger color="black" isActive={isActive} onClick={handleToggle}/>
    </section>
  );
};