import { NavLink, useParams } from "react-router-dom";
import classNames from "classnames";

export default function ChatList() {
  const { conversationId } = useParams();
  const chats = [
    {
      id: 1,
      user: {
        avatar:
          "https://pbs.twimg.com/profile_images/1502055692471087125/MadX2ZVE_400x400.jpg",
        name: "Mervan Yalçın",
      },
      lastMessage: "Selam Ben!",
    },
    {
      id: 2,
      user: {
        avatar:
          "https://pbs.twimg.com/profile_images/800120890176536576/rDKPTdk7_400x400.jpg",
        name: "Necip Fazıl",
      },
      unread: true,
      lastMessage: "Selam Mervan?",
    },
    {
      id: 3,
      user: {
        avatar:
          "https://pbs.twimg.com/profile_images/1093466063403188230/0B_sap5g_400x400.jpg",
        name: "Sıtkı Tarancı",
      },
      lastMessage: "Selam Mervan!",
    },
  ];

  return (
    <div className="h-[calc(100%-60px)] overflow-auto py-3">
      <header className="flex items-center justify-between px-5 mb-1">
        <h6 className="text-base font-semibold">Messages</h6>
        <button className="text-brand text-sm font-semibold">
          16 requests
        </button>
      </header>
      {chats.map((chat) => (
        <NavLink
          className={classNames({
            "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5": true,
            "font-semibold": chat?.unread,
            "!bg-[#efefef]": +conversationId === chat.id,
          })}
          key={chat.id}
          to={`/direct/inbox/${chat.id}`}
        >
          <img
            src={chat.user.avatar}
            className="w-14 h-14 rounded-full"
            alt=""
          />
          <div>
            <h6 className="text-sm">{chat.user.name}</h6>
            <p className={`text-sm ${!chat?.unread && "text-[#8e8e8e]"}`}>
              {chat.lastMessage}
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
