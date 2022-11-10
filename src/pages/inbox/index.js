import { Outlet } from "react-router-dom";
import Sidebar from "pages/inbox/components/Sidebar";

export default function InboxLayout() {
  return (
    <div className="border border-gray-300 rounded bg-white h-[calc(100vh-97px)] flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}
