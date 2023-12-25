import clsx from "clsx";
import { memo } from "react";
import { FC, MouseEvent } from "react";
import { Button, Icon } from "ui-kit";
import type { IButtonProps } from "../Button";
import type { IconType } from "ui-kit";
import "./IconButton.scss";

export interface IIconButtonProps extends IButtonProps {
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  typeIcon: IconType;
}

const IconButtonComponent: FC<IIconButtonProps> = ({
  className,
  isActive,
  isDisabled,
  onClick,
  typeIcon,
  ...rest
}) => {
  return (
    <Button
      className={clsx("IconButton", className)}
      isActive={isActive}
      isDisabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      <Icon type={typeIcon} />
    </Button>
  );
};

export const IconButton = memo(IconButtonComponent);