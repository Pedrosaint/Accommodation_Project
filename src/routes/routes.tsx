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
import OwnerLayout from "../layout/landord layout/owner_layout";
import OwnerDashboardView from "../core/landlord_dashboard/domain/dashboard/view/owner_dashboard.view";
import ViewAccommodationPage from "../core/landing_page/components/view_accommodation.page";
import ListOfAccommodation from "../core/landing_page/components/list_of_accommodation";
import OwnerPropertiesView from "../core/landlord_dashboard/domain/properties/view/owner_properties.view";
import OwnerPaymentView from "../core/landlord_dashboard/domain/payments/view/owner_payment.view";
import OwnerTenantsView from "../core/landlord_dashboard/domain/tenats/view/owner_tenants.view";
import StudentLayout from "../layout/student layout/student_layout";
import StudentDashboardView from "../core/student_dashboard/domain/dashboard/view/student_dashboard.view";
import StudentPaymentView from "../core/student_dashboard/domain/payments/view/student_payment.view";

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
        },
        {
          path: "/view_accommodation/:id",
          Component: ViewAccommodationPage,
        },
        {
          path: "/list_of_accommodation",
          Component: ListOfAccommodation,
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
        {
          path: "/lodge_owner/properties",
          Component: OwnerPropertiesView,
        },
        // {
        //   path: "/lodge_owner/bookings",
        //   Component: OwnerBookingsView,
        // },
        {
          path: "/lodge_owner/payments",
          Component: OwnerPaymentView,
        },
        {
          path: "/lodge_owner/tenants",
          Component: OwnerTenantsView,
        },
      ],
    },

    //== STUDENT DASHBOARD ==
    {
      path: "/student",
      Component: StudentLayout,
      children: [
        {
          path: "/student/dashboard",
          Component: StudentDashboardView,
        },
        {
          path: "/student/payments",
          Component: StudentPaymentView,
        },
      ],
    },
  ];
}
