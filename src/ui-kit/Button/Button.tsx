import clsx from "clsx";
import { memo } from "react";
import type { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEvent } from "react";
import { Icon } from "ui-kit";
import type { IconType } from "ui-kit";
import type { TButton } from "./types";
import "./Button.scss";

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  dataTestId?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  typeButton?: TButton;
  typeIcon?: IconType;
}

const ButtonComponent: FC<IButtonProps> = ({
  className,
  children,
  dataTestId = "uikit__button",
  isActive = false,
  isDisabled = false,
  onClick,
  typeButton = "button",
  typeIcon,
  ...rest
}) => {
  return (
    <button
      className={clsx("Button", className, {
        Button__disabled: isDisabled,
        Button__isActive: isActive,
      })}
      data-testid={dataTestId}
      disabled={isDisabled}
      onClick={onClick}
      type={typeButton}
      {...rest}
    >
      {typeIcon && <Icon type={typeIcon} data-testid="test-button-icon" />}
      <span className={typeIcon ? "Button-Text" : ""}>{children}</span>
    </button>
  );
};

export const Button = memo(ButtonComponent);