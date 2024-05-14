import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Homepage from "./pages/Homepage.jsx";
import Notespage from "./pages/Notespage.jsx";

import Mainlayout from "./layouts/Mainlayout.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Mainlayout />}>
      <Route index element={<Homepage />} />
      <Route path='/notes' element={<Notespage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
