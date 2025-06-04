import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import DefaulLayout from "./layout/DefaultLayout";
import Pokedex from "./pages/Pokedex";
import { GlobalProvider } from "./context/GlobalContext";
import SinglePokePage from "./pages/SinglePokePage";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaulLayout}>
              <Route path="/" Component={Home}></Route>
              <Route path="/pokedex" Component={Pokedex}></Route>
              <Route path="/pokemon/:slug" Component={SinglePokePage}></Route>
              <Route path="/*" Component={ErrorPage}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
