import Icon from "components/Icon";
import { NavLink } from "react-router-dom";

export default function Header({ user }) {
  return (
    <>
      <header className="flex items-center px-24 gap-x-24 py-4 pb-10">
        <img
          src="/no-avatar.jpeg"
          alt=""
          className="w-[150px] h-[150px] rounded-full"
        />
        <div>
          <div className="mb-4 flex gap-x-4 items-center">
            <h1 className="text-[28px] font-light text-textBasic">
              {user.username}
            </h1>
            <NavLink to={`/accounts/edit`} className="bg-white text-textBasic border-gray-300 px-[9px] border">
              Edit profile
            </NavLink>
            <button>
              <Icon size={24} name="settings" className="" />
            </button>
          </div>
          <nav className="flex gap-x-10 items-center">
            <div>
              <span className="font-semibold">
                {user.posts === "" ? user.posts : 0}
              </span>{" "}
              posts
            </div>
            <div>
              <span className="font-semibold">{user.followers.length}</span>{" "}
              followers
            </div>
            <div>
              <span className="font-semibold">{user.following.length}</span>{" "}
              following
            </div>
          </nav>

          <div className="mt-5 flex-1">
            <span className="capitalize text-textBasic font-semibold">
              {user.fullName}
            </span>{" "}
            <br />
            <span className=" text-textBasic whitespace-pre-line">
              {user.bio}
            </span>{" "}
            <br />
            <span className="text-link font-semibold">
              <a href={user.website} target="_blank">
                mervanyalcin.com
              </a>
            </span>
            <br />
          </div>
        </div>
      </header>

      <div className="flex items-center justify-start px-12">
        <div className="w-[125px] h-[130px] relative py-[10px] px-[15px]">
          <div className="w-[87px] h-[87px] rounded-full border-2 p-[2px] cursor-pointer text-center">
            <img
              className="w-auto h-full rounded-full mb-2"
              src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
              alt=""
            />
            <p className="">SSD</p>
          </div>
        </div>

        <div className="w-[125px] h-[130px] relative py-[10px] px-[15px]">
          <div className="w-[87px] h-[87px] rounded-full border-2 p-[2px] cursor-pointer text-center">
            <div className="items-center flex w-full h-full justify-center">
              <Icon size={40} name="plus-highlighted" />
            </div>
            <p className="">New</p>
          </div>
        </div>
      </div>
    </>
  );
}
