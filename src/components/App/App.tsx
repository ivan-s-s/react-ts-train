import type { FC } from "react";
import { useEffect, useState } from "react";
import { Layout } from "components";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "routes";
import { AccordionPage, AutocompletePage, ButtonPage, CheckboxPage, DocumentViewerPage, HomePage, IconPage, IconButtonPage, ModalPage, RipplePage, ScrollbarPage, SelectPage, OverlayPage, HamburgerPage, AvatarPage, SidebarPage, FormFieldPage, TextAreaPage } from "pages";
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
          <Route path={ROUTES.AVATAR} element={<AvatarPage />} />
          <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
          <Route path={ROUTES.CHECKBOX} element={<CheckboxPage />} />
          <Route path={ROUTES.DOCUMENT_VIEWER} element={<DocumentViewerPage />} />
          <Route path={ROUTES.FORM_FIELD} element={<FormFieldPage />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.HAMBURGER} element={<HamburgerPage />} />
          <Route path={ROUTES.ICON} element={<IconPage />} />
          <Route path={ROUTES.ICON_BUTTON} element={<IconButtonPage />} />
          <Route path={ROUTES.MODAL} element={<ModalPage />} />
          <Route path={ROUTES.OVERLAY} element={<OverlayPage />} />
          <Route path={ROUTES.RIPPLE} element={<RipplePage />} />
          <Route path={ROUTES.SCROLLBAR} element={<ScrollbarPage />} />
          <Route path={ROUTES.SELECT} element={<SelectPage />} />
          <Route path={ROUTES.SIDEBAR} element={<SidebarPage />} />
          <Route path={ROUTES.TEXTAREA} element={<TextAreaPage />} />
        </Routes>
      </Layout>
    </div>
    </SocketProvider>
  );
};
