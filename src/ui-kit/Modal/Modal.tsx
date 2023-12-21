import clsx from "clsx";
import { useState, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { default as ReactModel } from "react-responsive-modal";
import { Icon } from "ui-kit";
import "react-responsive-modal/styles.css";
import "./Modal.scss";

type TModalSize = "medium";

type TModalProps = {
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  size?: TModalSize;
  isOpen: boolean;
  onCloseModal: () => void;
}

export const Modal = ({
  children,
  className,
  dataTestId,
  size = "medium",
  isOpen,
  onCloseModal
}: TModalProps): JSX.Element => {
  const defaultClassNames = {
    modal: clsx("ModalDefault", className, {
      ModalDefault__medium: size === "medium",
    }),
    closeButton: clsx("ModalDefaultCloseButton"),
  };
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    console.log(scrollbarWidth);
    if (isOpen && scrollbarWidth) {
      const _styles = {
        modal: { marginRight: `${scrollbarWidth}px` },
      };
      setStyles(_styles);
      document.body.classList.add("Modal__open");
      document.body.style.paddingRight = `${scrollbarWidth - 16}px`;

      return () => {
        setStyles({});
        document.body.classList.remove("Modal__open");
        document.body.style.removeProperty("padding-right");
      }
    }
  }, [isOpen]);

  return (
    <ReactModel
      classNames={defaultClassNames}
      center
      closeIcon={<Icon type="Close" />}
      styles={styles}
      open={isOpen}
      onClose={onCloseModal}
    >
      <div className="Modal">{children}</div>
    </ReactModel>
  );
};

type TModalHeaderProps = {
  className?: string;
  children?: ReactNode;
  align?: "start" | "center" | "end";
}

const ModalHeader: FC<TModalHeaderProps> = ({ className, children, align }) => {
  return (
    <div
      className={clsx("ModalHeader", className, {
        ModalHeader__start: align === "start",
        ModalHeader__center: align === "center",
        ModalHeader__end: align === "end",
      })}
    >
      {children}
    </div>
  );
};

Modal.Header = ModalHeader;

type TModalContentProps = {
  className?: string;
  children?: ReactNode;
}

const ModalContent: FC<TModalContentProps> = ({ className, children }) => {
  return (
    <div className={clsx("ModalContent", className)}>
      {children}
    </div>
  );
};

Modal.Content = ModalContent;

type TModalFooterProps = {
  className?: string;
  children?: ReactNode;
}

const ModalFooter: FC<TModalFooterProps> = ({ className, children }) => {
  return (
    <div className={clsx("ModalFooter", className)}>
      {children}
    </div>
  );
};

Modal.Footer = ModalFooter;