import PrivateRoute from "components/PrivateRoute";
import MainLayout from "pages/Layout";
import Home from "pages/Home";
import ProfileLayout from "pages/profile";
import ProfilePosts from "pages/profile/Posts";
import ProfileTagged from "pages/profile/Tagged";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import AuthLayout from "pages/auth";
import Logout from "pages/Logout";
import InboxLayout from "pages/inbox";
import Inbox from "pages/inbox/Inbox";
import Chat from "pages/inbox/chat";
import ProfileReels from "pages/profile/Reels";
import ProfileSaved from "pages/profile/Saved";
import AccountsLayout from "pages/accounts";
import Edit from "pages/accounts/Edit";
import ProfessionalAccopunt from "pages/accounts/ProfessionalAccopunt";
import ChangePassword from "pages/accounts/ChangePassword";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    auth: true,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: ":username",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <ProfilePosts />,
          },
          {
            path: "tagged",
            element: <ProfileTagged />,
          },
          {
            path: "reels",
            element: <ProfileReels />,
          },
          {
            path: "saved",
            element: <ProfileSaved />,
          },
        ],
      },

      {
        path: "direct",
        children: [
          {
            path: "inbox",
            element: <InboxLayout />,
            children: [
              {
                index: true,
                element: <Inbox />,
              },
              {
                path: ":conversationId",
                element: <Chat />,
              },
            ],
          },
        ],
      },
      {
        path: "/accounts",
        element: <AccountsLayout />,
        children: [
          {
            path: "edit",
            element: <Edit />,
          },
          {
            path: "professional-account",
            element: <ProfessionalAccopunt />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

const authCheck = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authCheck(route.children);
    }
    return route;
  });

export default authCheck(routes);
