import { Outlet } from "react-router-dom";
import { getUserInfo } from "firebase.js";
import React from "react";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import AccountsNotFound from "./AccountsNotFound";
import { useSelector } from "react-redux";

export default function AccountsLayout() {
  const [user, setUser] = useState(null);

  const auth = useSelector((state) => state.auth.user);

  useEffect(() => {
    getUserInfo(auth.username)
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
