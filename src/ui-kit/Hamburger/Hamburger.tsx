import clsx from "clsx";
import { memo } from "react";
import type { FC, MouseEvent } from "react";
import "./Hamburger.scss";

enum EColor {
  BLACK = "black",
  WHITE = "white",
};

type THamburgerColor = "black" | "white";

type THamburgerProps = {
  className?: string;
  color?: THamburgerColor;
  dataTestId?: string;
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
};

const HamburgerComponent: FC<THamburgerProps> = ({
  className,
  color = EColor.BLACK,
  dataTestId = "uikit__hamburger",
  isActive = false,
  onClick,
}) => {
  return (
    <div className={clsx("Hamburger", className)} data-testid={dataTestId} onClick={onClick}>
      <div
        className={clsx("Burger", {
          Burger__black: color === EColor.BLACK,
          Burger__white: color === EColor.WHITE,
          Burger__active: isActive,
        })}
      />
    </div>
  );
};

export const Hamburger = memo(HamburgerComponent);