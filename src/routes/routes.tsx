import type { RouteObject } from "react-router-dom";
import MainLayout from "../layout/main_layout";
import LandingView from "../core/landing_page/view/landing_view";
import AuthView from "../auth/view/auth.view";
import Login from "../auth/components/login";
import Register from "../auth/components/register";
import UserType from "../auth/components/user_type";

export default function appRouter(): RouteObject[] {
  return [
    // == LANDING PAGES ==
    {
      path: "/",
      Component: MainLayout,
      children: [
        {
          path: "/",
          Component: LandingView,
        },
  

      ],
    },

    //== AUTH ==
    {
        path: "/auth",
        Component: AuthView,
        children: [
          {
            path: "/auth/login",
            Component: Login,
          },
          {
            path: "/auth/register",
            Component: Register,
          },
          {
            path: "/auth/user_type",
            Component: UserType,
          }
        ]
    }

    //== LANDLORD DASHBOARD ==
  
  ];
}
