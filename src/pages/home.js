import { logout } from "firebase.js";

export default function Home() {
  return (
    <>
      <h1>Selam</h1>
      <h2>Aleyküm Selam</h2>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </>
  );
}
