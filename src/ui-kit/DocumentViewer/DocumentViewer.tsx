import clsx from "clsx";
import type { FC } from "react";
import { memo } from "react";
import "./DocumentViewer.scss";

type TDocumentViewerProps = {
  className?: string;
  dataTestId?: string;
  step?: number;
  template?: string;
};

const DocumentViewerComponent: FC<TDocumentViewerProps> = ({
  className,
  dataTestId,
  step,
  template
}) => {
  return (
    <div className={clsx("DocumentViewer", className)}>

    </div>
  );
};

export const DocumentViewer = memo(DocumentViewerComponent);