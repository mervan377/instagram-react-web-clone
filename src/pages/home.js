import { logout } from "firebase.js";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[470px] bg-amber-400">
        <h1>Selam</h1>
        <h2>Aleyküm Selam</h2>
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>

      <Sidebar />
    </div>
  );
}
