import { Outlet } from "react-router-dom";
import NavBar from "./../components/headers/NavBar";
import "../cssComponents/loader.css";
import "../cssComponents/DefaultLayout.css";

export default function DefaultLayout() {
//   const sidebarWidth = "250px";

  return (
    <div className="pokedex-layout">
      <NavBar />
      <div className="pokedex-main">
        <main>
          <Outlet />
        </main>
        <footer className="pokedex-footer">footer</footer>
      </div>
    </div>
  );
}
