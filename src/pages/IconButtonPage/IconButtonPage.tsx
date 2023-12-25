import type { FC, MouseEvent } from "react";
import "./IconButtonPage.scss";
import { IconButton } from "ui-kit";
import { Hr } from "components";

export const IconButtonPage: FC = () => {
  const handleClick = (event: MouseEvent) => {
    console.log("Event ", event);
  };

  return (
    <div className="IconButtonPage">
      <h2>Icon Button</h2>
      <IconButton typeIcon="Telegram" onClick={handleClick}/>
      <Hr />
      <h2>Icon Button (disabled)</h2>
      <IconButton typeIcon="Telegram" isDisabled onClick={handleClick}/>
    </div>
  );
};