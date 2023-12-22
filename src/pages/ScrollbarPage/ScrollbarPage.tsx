import { useRef } from "react";
import type { FC } from "react";
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import type { OverscrollEffect } from "smooth-scrollbar/plugins/overscroll";
import { Scrollbar } from "ui-kit";
import "./ScrollbarPage.scss";

export const ScrollbarPage: FC = () => {
  const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus iusto ad tempora quos? Totam officia, dolorem impedit ad iste fuga aliquam sit explicabo provident debitis dolore assumenda repudiandae? Nesciunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus iusto ad tempora quos? Totam officia, dolorem impedit ad iste fuga aliquam sit explicabo provident debitis dolore assumenda repudiandae? Nesciunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus iusto ad tempora quos? Totam officia, dolorem impedit ad iste fuga aliquam sit explicabo provident debitis dolore assumenda repudiandae? Nesciunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus iusto ad tempora quos? Totam officia, dolorem impedit ad iste fuga aliquam sit explicabo provident debitis dolore assumenda repudiandae? Nesciunt.";

  const scrollbar = useRef<BaseScrollbar | null>(null);

  return (
    <div className="ScrollbarPage">
      <h2>Scrollbar</h2>
      <Scrollbar
        alwaysShowTracks
        ref={scrollbar}
        plugins={{
          overscroll: {
            // effect: "glow",
            effect: "bounce",
          } as unknown as OverscrollEffect,
        }}
      >
        <div className="ScrollbarPage-Content" id="my-scrollbar">
          {description}
        </div>
      </Scrollbar>
    </div>
  );
};