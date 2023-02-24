import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./common.css";
import { Home } from "./components/Home/Home";
import { Patient } from "./components/Patient/Patient";
import { ConfigProvider } from "antd";

import frFR from "antd/es/locale/fr_FR";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import initPatientsStorage from "./data/initPatientsStorage";
import initMedicalDataStorage from "./data/initMedicalDataStorage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/patient/:id", element: <Patient /> },
]);

initMedicalDataStorage();
initPatientsStorage();

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ConfigProvider locale={frFR}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </React.StrictMode>
  );
}
