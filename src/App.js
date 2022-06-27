import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./Components/Main/Main";
import { Auth } from "./Components/Auth/Auth";
import { Catalog } from "./Components/Catalog/Catalog";
import { User } from "./Components/User/User";
import { Reg } from "./Components/Reg/Reg";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="w-75 m-auto text-center">
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <Main />
              </>
            }
          />
          <Route
            path={"/catalog"}
            element={
              <>
                <Catalog />
              </>
            }
          />
          <Route
            path={"/auth"}
            element={
              <>
                <Auth />
              </>
            }
          />
          <Route
            path={"/reg"}
            element={
              <>
                <Reg />
              </>
            }
          />
          <Route
            path={"/user"}
            element={
              <>
                <User />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
