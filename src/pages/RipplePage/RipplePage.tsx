import { FC } from "react";
import { Ripple } from "ui-kit";
import "./RipplePage.scss";

export const RipplePage: FC = () => {
  return (
    <div className="RipplePage">
      <h2>Ripple Page</h2>
      <section className="RipplePage-Section">
        <Ripple />
      </section>
    </div>
  );
};