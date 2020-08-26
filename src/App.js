import React from "react";
import {Logo} from "./components/Logo";

import {GlobalStyle} from "./styles/GlobalStyles";
import {Home} from "./pages/Home";
import {Detail} from "./pages/Detail";
import {Favs} from "./pages/Favs";
import {User} from "./pages/User";
import {NotRegisteredUser} from "./pages/NotRegisteredUser";
import {NavBar} from "./components/Navbar";

import {Router} from "@reach/router";


export const App = () => {
  const UserLogged = ({children}) => {
    return children({isAuth: false});
  }
  return (
    <div>
      <GlobalStyle/>
      <Logo/>
      <Router>
          <Home path="/"/>
          <Home path="/pet/:id"/>
          <Detail path="/detail/:detailId"/>
      </Router>
      <UserLogged>
        {
          ({isAuth}) =>
            isAuth
              ? <Router>
                <Favs path="/favs"/>
                <User path="/user"/>
              </Router>
              : <Router>
                <NotRegisteredUser path="/favs"/>
                <NotRegisteredUser path="/user"/>
              </Router>
        }
      </UserLogged>
      <NavBar/>
    </div>
  )
}
