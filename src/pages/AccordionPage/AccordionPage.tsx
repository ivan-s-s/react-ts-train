import { Accordion } from "ui-kit";
import type { FC } from "react";
import "./AccordionPage.scss";

export const AccordionPage: FC = () => {
  return (
    <div className="AccordionPage">
      <h2>Accordion</h2>
      <Accordion title="Title" isActive={true}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio voluptatum magni nemo nihil explicabo praesentium. Omnis explicabo modi et voluptatem veniam repellat praesentium voluptas molestias atque. Perspiciatis, reiciendis commodi?</p>
      </Accordion>
    </div>
  );
};
