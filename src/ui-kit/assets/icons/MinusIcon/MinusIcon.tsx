import { memo } from "react";
import type { FC } from "react";
import type { TIconProps } from "ui-kit/assets/types";

const Component: FC<TIconProps> = ({ height = 24, width = 24, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 12L18 12"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
</svg>
);

export const MinusIcon = memo(Component);