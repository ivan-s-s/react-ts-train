import { memo } from "react";
import type { FC } from "react";
import type { TIconProps } from "ui-kit/assets/types";

const RippleIconComponent: FC<TIconProps> = ({ height = 200, width = 200, ...props }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      background: "rgb(255, 255, 255)",
      display: "block",
      shapeRendering: "auto",
    }}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <circle cx="50" cy="50" r="0" fill="none" stroke="#68b811" stroke-width="2">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1s"
        values="0;40"
        keyTimes="0;1"
        keySplines="0 0.2 0.8 1"
        calcMode="spline"
        begin="0s"
      ></animate>
      <animate
        attributeName="opacity"
        repeatCount="indefinite"
        dur="1s"
        values="1;0"
        keyTimes="0;1"
        keySplines="0.2 0 0.8 1"
        calcMode="spline"
        begin="0s"
      ></animate>
    </circle>
    <circle cx="50" cy="50" r="0" fill="none" stroke="#80d820" stroke-width="2">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1s"
        values="0;40"
        keyTimes="0;1"
        keySplines="0 0.2 0.8 1"
        calcMode="spline"
        begin="-0.5s"
      ></animate>
      <animate
        attributeName="opacity"
        repeatCount="indefinite"
        dur="1s"
        values="1;0"
        keyTimes="0;1"
        keySplines="0.2 0 0.8 1"
        calcMode="spline"
        begin="-0.5s"
      ></animate>
    </circle>
  </svg>
);

export const RippleIcon = memo(RippleIconComponent);