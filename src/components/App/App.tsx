import type { FC } from "react";
import { useEffect, useState } from "react";
import { Layout } from "components";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "routes";
import { AccordionPage, AutocompletePage, ButtonPage, CheckboxPage, HomePage, IconPage, ModalPage, SelectPage } from "pages";
import { SocketProvider } from "services/context";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { Socket, connect } from "socket.io-client";

export const App: FC = () => {
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | undefined>();

  useEffect(() => {
    const connection = connect("http://localhost:3001");
    setSocket(connection);
    return () => {
      connection.close();
    }
  }, []);

  return (
    <SocketProvider value={socket}>
      <div className="App">
      <Layout>
        <Routes>
        <Route path={ROUTES.ACCORDION} element={<AccordionPage />} />
          <Route path={ROUTES.AUTOCOMPLETE} element={<AutocompletePage />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ICON} element={<IconPage />} />
          <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
          <Route path={ROUTES.CHECKBOX} element={<CheckboxPage />} />
          <Route path={ROUTES.MODAL} element={<ModalPage />} />
          <Route path={ROUTES.SELECT} element={<SelectPage />} />
        </Routes>
      </Layout>
    </div>
    </SocketProvider>
  );
};
