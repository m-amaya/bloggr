import { Layout } from "@src/components/layout";
import { ArticlePage } from "@src/pages/article";
import { HomePage } from "@src/pages/home";
import { LoginPage } from "@src/pages/login";
import { ProfilePage } from "@src/pages/profile";
import { WritePage } from "@src/pages/write";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "write",
        element: <WritePage />
      },
      {
        path: ":author/:title",
        element: <ArticlePage />
      },
      {
        path: "profile",
        element: <ProfilePage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);
