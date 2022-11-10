import { Outlet } from "react-router-dom";
import { getUserInfo } from "firebase.js";
import React from "react";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import AccountsNotFound from "./AccountsNotFound";

export default function AccountsLayout() {
  const [user, setUser] = useState(null);

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
      <div className="flex bg-white border-[1.4px] mb-20">
        <Sidebar />

        <Outlet />
      </div>
    )
  );
}
