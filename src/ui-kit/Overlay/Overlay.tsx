import { memo } from "react";
import type { FC } from "react";
import "./Overlay.scss";

type TProps = {
  className?: string;
  
};

const OverlayComponent: FC<TProps> = ({className}) => {
  return (
    <div>
    
    </div>
  );
};

export const Overlay = memo(OverlayComponent);