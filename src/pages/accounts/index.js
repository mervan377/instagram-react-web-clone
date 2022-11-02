import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom";
import Header from "components/Header";
import { getUserInfo } from "firebase.js";
import React from "react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "./components/Sidebar";
import AccountsNotFound from "./AccountsNotFound";

export default function AccountsLayout() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const username = {
    name: "Mervan Yalçın",
    uname: "mervan37",
    avatar:
      "https://pbs.twimg.com/profile_images/1502055692471087125/MadX2ZVE_400x400.jpg",
  };

  useEffect(() => {
    getUserInfo(username.uname)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setUser(false);
      });
  }, []);

  if (user === false) {
      return <AccountsNotFound />;
    }

  if (user === null) {
    return <div>Loading...</div>;
  }

  return (
    user && (
      <div  className="flex bg-white border">

        <Sidebar />

        <Outlet />
      </div>
    )
  );
}
