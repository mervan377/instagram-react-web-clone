import Header from "./components/header";
import Reply from "./components/reply";
import Messages from "pages/inbox/chat/components/messages";
import { useState } from "react";

export default function Chat() {
  const user = {
    name: "Mervan Yalçın",
    avatar:
      "https://pbs.twimg.com/profile_images/1502055692471087125/MadX2ZVE_400x400.jpg",
  };

  const [messages, setMessages] = useState([
    {
      from: {
        id: "nOoW5upxd4aUepJggZsCgBUwl5D3",
        name: "Mervan Yalçın",
        username: "mervan37",
        avatar:
          "https://pbs.twimg.com/profile_images/1502055692471087125/MadX2ZVE_400x400.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "H7UmMJXPGRMYWq4M58iDwYbGSHe2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/800120890176536576/rDKPTdk7_400x400.jpg",
      },
      message: "test",
    },
    {
      from: {
        id: "H7UmMJXPGRMYWq4M58iDwYbGSHe2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/800120890176536576/rDKPTdk7_400x400.jpg",
      },
      message: "deneme",
    },
    {
      from: {
        id: "H7UmMJXPGRMYWq4M58iDwYbGSHe2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/800120890176536576/rDKPTdk7_400x400.jpg",
      },
      message: "adana",
    },
    {
      from: {
        id: "nOoW5upxd4aUepJggZsCgBUwl5D3",
        name: "Mervan Yalçın",
        username: "mervan37",
        avatar:
          "https://pbs.twimg.com/profile_images/1502055692471087125/MadX2ZVE_400x400.jpg",
      },
      message:
        "w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet",
    },
    {
      from: {
        id: "nOoW5upxd4aUepJggZsCgBUwl5D3",
        name: "Mervan Yalçın",
        username: "mervan37",
        avatar:
          "https://pbs.twimg.com/profile_images/1502055692471087125/MadX2ZVE_400x400.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "H7UmMJXPGRMYWq4M58iDwYbGSHe2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/800120890176536576/rDKPTdk7_400x400.jpg",
      },
      message: "test",
    },
    {
      from: {
        id: "H7UmMJXPGRMYWq4M58iDwYbGSHe2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/800120890176536576/rDKPTdk7_400x400.jpg",
      },
      message: "deneme",
    },
    {
      from: {
        id: "H7UmMJXPGRMYWq4M58iDwYbGSHe2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/800120890176536576/rDKPTdk7_400x400.jpg",
      },
      message: "adana",
    },
    {
      from: {
        id: "nOoW5upxd4aUepJggZsCgBUwl5D3",
        name: "Mervan Yalçın",
        username: "mervan37",
        avatar:
          "https://pbs.twimg.com/profile_images/1502055692471087125/MadX2ZVE_400x400.jpg",
      },
      message:
        "w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet",
    },
    {
      from: {
        id: "nOoW5upxd4aUepJggZsCgBUwl5D3",
        name: "Mervan Yalçın",
        username: "mervan37",
        avatar:
          "https://pbs.twimg.com/profile_images/1502055692471087125/MadX2ZVE_400x400.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "H7UmMJXPGRMYWq4M58iDwYbGSHe2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/800120890176536576/rDKPTdk7_400x400.jpg",
      },
      message: "test",
    },
    {
      from: {
        id: "H7UmMJXPGRMYWq4M58iDwYbGSHe2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/800120890176536576/rDKPTdk7_400x400.jpg",
      },
      message: "deneme",
    },
    {
      from: {
        id: "H7UmMJXPGRMYWq4M58iDwYbGSHe2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/800120890176536576/rDKPTdk7_400x400.jpg",
      },
      message: "adana",
    },
    {
      from: {
        id: "nOoW5upxd4aUepJggZsCgBUwl5D3",
        name: "Tayfun Erbilen",
        username: "tayfunerbilen",
        avatar:
          "https://pbs.twimg.com/profile_images/1502055692471087125/MadX2ZVE_400x400.jpg",
      },
      message:
        "w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet",
    },
  ]);

  return (
    <div className="flex-1">
      <Header user={user} />
      <Messages messages={messages} /> 
      <Reply setMessages={setMessages} />
    </div>
  );
}
