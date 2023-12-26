import clsx from "clsx";
import shadowRoot from "react-shadow";
import type { FC } from "react";
import { memo, useEffect, useRef, useState } from "react";
import { IconButton } from "ui-kit";

import "./DocumentViewer.scss";

type TDocumentViewerProps = {
  className?: string;
  dataTestId?: string;
  step?: number;
  template?: string;
};

interface TPosition {
  x: number;
  y: number;
}

const DocumentViewerComponent: FC<TDocumentViewerProps> = ({
  className,
  dataTestId,
  step = 0.1,
  template,
}) => {
  const defaultPosition = {
    left: 0,
    scale: 1,
    top: 0,
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const documentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(defaultPosition);

  const handleSetDefault = () => {
    setPosition({
      scale: getDefaultScale(),
      top: 0,
      left:
        contentRef.current.clientWidth / containerRef.current?.clientWidth - documentRef.current.clientHeight / containerRef.current?.clientHeight,
    });
  };

  useEffect(() => {
    if (contentRef.current && documentRef.current && containerRef.current) {
      if ((containerRef.current.clientWidth && containerRef.current.clientHeight) === 0) {
        const resizeObserver = new ResizeObserver(() => {
          resizeObserver.disconnect();
          handleSetDefault();
        });

        resizeObserver.observe(containerRef.current);

        return () => resizeObserver.disconnect();
      }

      handleSetDefault();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentRef, containerRef]);

  const getDefaultScale = () => {
    const xScale = contentRef.current?.clientWidth / containerRef.current?.clientWidth;
    const yScale = documentRef.current?.clientHeight / containerRef.current?.clientHeight;
    return Math.min(xScale, yScale) || 1;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const position: TPosition = { x: e.screenX, y: e.screenY };
    const event = handleUpdatePosition(position);
    const removeEvent = () => {
      window.removeEventListener("pointermove", event);
      window.removeEventListener("pointerup", removeEvent);
    };
    window.addEventListener("pointermove", event);
    window.addEventListener("pointerup", removeEvent);
    return true;
  };

  const handleUpdatePosition = (pos: TPosition) => (e: PointerEvent) => {
    const top = position.top - (pos.y - e.screenY) / position.scale;
    const left = position.left - (pos.x - e.screenX) / position.scale;
    setPosition((position: { left: number; scale: number; top: number }) => ({
       ...position,
       left,
       top,
    }));
  }

  const handleSetScale = (scale: number) => () =>
    setPosition((pos: { left: number; scale: number; top: number }) => ({
      ...pos,
      scale: pos.scale + scale,
  }));

  return (
    <div className={clsx("DocumentViewer", className)}>
      <div className="DocumentViewer-Content" ref={contentRef}>
        <div className="DocumentViewer-Document" ref={documentRef} style={{left: position.left, top: position.top, transform: `scale(${position.scale})`}}>
          <div className="DocumentViewer-ShadowContainer">
            <shadowRoot.div className="DocumentViewer-ShadowRoot">
              <div ref={containerRef}>
                {template && <div dangerouslySetInnerHTML={{ __html: template }}/>}
              </div>
            </shadowRoot.div>
          </div>
        </div>
        <div className="DocumentViewer-ContentDrag" onPointerDown={handlePointerDown} />
      </div>
      <div className="DocumentViewer-ControlButtons">
          <IconButton typeIcon="Center" onClick={handleSetDefault}/>
          <IconButton typeIcon="Plus" onClick={handleSetScale(step)}/>
          <IconButton typeIcon="Minus" isDisabled={position.scale - step < 0.1} onClick={handleSetScale(-step)}/>
        </div>
    </div>
  );
};

export const DocumentViewer = memo(DocumentViewerComponent);