import clsx from "clsx";
import { memo } from "react";
import type { FC, MouseEvent } from "react";
import "./Avatar.scss";

type TAvatarProps = {
  className?: string;
  classNameSmallCircle?: string;
  dataTestId?: string;
  image?: string;
  onClick?: (event: MouseEvent) => void;
  size?: number;
  title?: string;
};

const AvatarComponent: FC<TAvatarProps> = ({
  className,
  classNameSmallCircle,
  dataTestId = "uikit__avatar",
  image,
  onClick,
  size = 46,
  title,
}) => {
  const sizeBox = `${size - 4}px`;
  const sizeInner = `${size - 8}px`;
  const sizeTitle = `${size / 2}px`;
  const sizeWrapper = `${size}px`;

  return (
    <div
      className={clsx("Avatar", className)}
      data-testid={dataTestId}
      onClick={onClick}
      style={{ width: sizeInner, height: sizeInner }}
    >
      <div
        className={clsx("AvatarInner", classNameSmallCircle)}
        style={{ width: sizeInner, height: sizeInner }}
      >
        {image && (
          <img 
            alt=""
            className="AvatarFace"
            data-testid="test-avatarFace_image"
            src={image}
            width={sizeInner}
            height={sizeInner}
          />
        )}
        {title && (
          <div
            className="AvatarFace"
            data-testid="test-avatarFace_title"
            style={{ fontSize: sizeTitle }}
          >
            {title}
          </div>
        )}
      </div>
      <div className="AvatarBorder" style={{ width: sizeWrapper, height: sizeWrapper }}>
        <div className="AvatarBorderBox" style={{ width: sizeBox, height: sizeBox }} />
      </div>
    </div>
  );
};

export const Avatar = memo(AvatarComponent);