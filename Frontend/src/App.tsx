import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/tailiwnd.scss";
import "./styles/index.scss";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import StudySet from "./routes/studySet";
import Home from "./routes";
import Quiz from "./routes/quiz";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "studySet/:setId",
        element: <StudySet />,
      },
      {
        path: "studySet/:setId/quiz",
        element: <Quiz />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as any).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
