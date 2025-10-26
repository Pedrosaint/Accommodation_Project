import type { RouteObject } from "react-router-dom";
import MainLayout from "../layout/main_layout";
import LandingView from "../core/landing_page/view/landing_view";
import AuthView from "../auth/view/auth.view";
import Login from "../auth/components/login";
import UserType from "../auth/components/user_type";
import StudentSignup from "../auth/components/student_signup";
import OwnerSignup from "../auth/components/owner_signup";
import About from "../core/landing_page/components/about";
import Contact from "../core/landing_page/components/contact";
import OwnerLayout from "../layout/owner_layout";
import OwnerDashboardView from "../core/landlord_dashboard/domain/dashboard/view/owner_dashboard.view";

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
        {
          path: "/about",
          Component: About,
        },
        {
            path: "/contact",
            Component: Contact,
        }
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
            path: "/auth/user_type",
            Component: UserType,
          },
          {
            path: "/auth/student_signup",
            Component: StudentSignup,
          },
          {
            path: "/auth/lodge_owner_signup",
            Component: OwnerSignup,
          },
        ]
    },

    //== LANDLORD DASHBOARD ==
    {
      path: "/lodge_owner",
      Component: OwnerLayout,
      children: [
        {
          path: "/lodge_owner/dashboard",
          Component: OwnerDashboardView,
        },
      ],
    },
  ];
}
