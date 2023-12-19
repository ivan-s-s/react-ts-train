import type { FC } from "react";
import { Layout } from "components";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "routes";
import { AccordionPage, AutocompletePage, ButtonPage, HomePage, IconPage, SelectPage } from "pages";

export const App: FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
        <Route path={ROUTES.ACCORDION} element={<AccordionPage />} />
          <Route path={ROUTES.AUTOCOMPLETE} element={<AutocompletePage />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ICON} element={<IconPage />} />
          <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
          <Route path={ROUTES.SELECT} element={<SelectPage />} />
        </Routes>
      </Layout>
    </div>
  );
};
