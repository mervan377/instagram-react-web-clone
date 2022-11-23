import { useParams, NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Icon from "components/Icon";
import classNames from "classnames";
import ProfileNotFound from "pages/profile/Not-Found";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { getUserInfo } from "firebase.js";
import { useState } from "react";

export default function ProfileLayout() {
  const currentUser = useParams();
  const [user, setUser] = useState(null);


  useEffect(() => {
    getUserInfo(currentUser.username)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setUser(false);
      });
  }, []);

  if (user === false) {
    return <ProfileNotFound />;
  }

  if (user === null) {
    return <div>Loading...</div>;
  }

  return (
    user && (
      <div>
        <Helmet>
          <title>
            {user.fullName} (@{user.username}) • Instagram photos and videos
          </title>
        </Helmet>
        <Header user={user} />
        <nav className="border-t flex gap-x-16 justify-center items-center mt-10">
          <NavLink
            to={`/${currentUser}`}
            end={true}
            className={({ isActive }) =>
              classNames({
                "text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
                "text-[#8e8e8e] border-transparent": !isActive,
                "text-black border-black": isActive,
              })
            }
          >
            <Icon name="post" size={12} />
            POSTS
          </NavLink>

          <NavLink
            to={`/${currentUser}/reels`}
            end={true}
            className={({ isActive }) =>
              classNames({
                "text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
                "text-[#8e8e8e] border-transparent": !isActive,
                "text-black border-black": isActive,
              })
            }
          >
            <Icon name="reels" size={12} />
            REELS
          </NavLink>

          <NavLink
            to={`/${currentUser}/saved`}
            end={true}
            className={({ isActive }) =>
              classNames({
                "text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
                "text-[#8e8e8e] border-transparent": !isActive,
                "text-black border-black": isActive,
              })
            }
          >
            <Icon name="saved" size={12} />
            SAVED
          </NavLink>

          <NavLink
            to={`/${currentUser}/tagged`}
            end={true}
            className={({ isActive }) =>
              classNames({
                "text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
                "text-[#8e8e8e] border-transparent": !isActive,
                "text-black border-black": isActive,
              })
            }
          >
            <Icon name="tag" size={12} />
            TAGGED
          </NavLink>
        </nav>
        <Outlet />
      </div>
    )
  );
}
