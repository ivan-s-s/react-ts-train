import clsx from "clsx";
import { memo, useEffect, useRef, useState } from "react";
import { FC, PropsWithChildren } from "react";
import { Icon, TRANSITION } from "ui-kit";
import { CSSTransition } from "react-transition-group";
import "./Accordion.scss";

type TProps = {
  className?: string;
  isActive?: boolean;
  title?: string;
} & PropsWithChildren;

const AccordionComponent: FC<TProps> = ({children, isActive = false, title = "", className}) => {
  const [isOpen, setIsOpen] = useState(isActive);
  const nodeRef = useRef<HTMLDivElement>(null);
  const contentHeight = nodeRef.current?.scrollHeight;

  const setAtToStringAndPx = (value: number): string => {
    return value.toString() + "px";
  }

  useEffect(() => {
    if (nodeRef.current && contentHeight) {
      nodeRef.current.style.setProperty("--content-height", setAtToStringAndPx(contentHeight));
    }
  }, [contentHeight]);

  const handleToggleAccordion = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className={clsx("Accordion", className, {
      Accordion__active: isOpen
    })}>
      <div className="Accordion-Header" onClick={handleToggleAccordion}>
        <div className="Accordion-HeaderTitle">{title}</div>
        <Icon className="Accordion-HeaderIcon" type="ArrowDown" />
      </div>

      <CSSTransition classNames="Accordion-ContentWrapper" in={isOpen} nodeRef={nodeRef} timeout={TRANSITION} unmountOnExit>
        <div ref={nodeRef}>
          <div className="Accordion-Content">{children}</div>
        </div>
      </CSSTransition>
    </div>
  );
};

export const Accordion = memo(AccordionComponent);