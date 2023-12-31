import { memo } from "react";
import type { FC } from "react";
import type { TIconProps } from "ui-kit/assets/types";

const IconComponent: FC<TIconProps> = ({ height, width, ...props }) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
	<path d="M1 3.88314L3 6L9 1" stroke="white" stroke-width="2" stroke-linecap="round" />
</svg>
);

export const CheckboxIcon = memo(IconComponent);