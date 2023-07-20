import { lazy, Suspense } from "react";
import { createHashRouter, redirect } from "react-router-dom";

import { loader as indexLayoutLoader } from "../layouts/indexLayout";
//import DevelopDemo from "../pages/DevelopDemo";
import ErrorPage from "../pages/ErrorPage";
import DevPage from "../pages/DevPage";
const IndexPage = lazy(() => import("../pages/IndexPage"));

const IndexLayout = lazy(() => import("../layouts/indexLayout"));

export const router = createHashRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    loader: () => {
      return redirect("/petroleum/index");
    },
  },

  {
    path: "/petroleum",
    errorElement: <ErrorPage />,
    loader: indexLayoutLoader,
    element: (
      <Suspense>
        <IndexLayout></IndexLayout>
      </Suspense>
    ),
    children: [
      {
        index: true,
        loader: () => {
          return redirect("/petroleum/index");
        },
      },

      {
        path: "index",
        element: (
          <Suspense>
            <IndexPage></IndexPage>
          </Suspense>
        ),
      },

      {
        path: "dev",
        element: (
          <Suspense>
            <DevPage></DevPage>
          </Suspense>
        ),
      },
    ],
  },
]);
