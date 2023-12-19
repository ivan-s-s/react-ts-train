import { DOMAttributes } from "react";
import classNames from "classnames";
import { IconType, IconTypes } from "./IconType";
import "./Icon.scss";

export interface IIconProps extends DOMAttributes<HTMLDivElement> {
  className?: string;
  type: IconType;
}

const getIcon = (type: IconType): JSX.Element =>
  IconTypes.get(type) as JSX.Element;

export const Icon: React.FC<IIconProps> = ({ className, type, ...rest }) => {
  return (
    <div className={classNames("Icon", className)} {...rest}>
      {getIcon(type)}
    </div>
  );
};
