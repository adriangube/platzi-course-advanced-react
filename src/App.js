import React, {useContext, Suspense} from "react";
import {Logo} from "./components/Logo";

import {GlobalStyle} from "./styles/GlobalStyles";
import {Home} from "./pages/Home";
import {Detail} from "./pages/Detail";
// import {Favs} from "./pages/Favs";
import {User} from "./pages/User";
import {NotFound} from "./pages/NotFound";
import {NotRegisteredUser} from "./pages/NotRegisteredUser";
import {NavBar} from "./components/Navbar";

import {Redirect, Router} from "@reach/router";
import {Context} from "./Context";

const Favs = React.lazy(() => import('./pages/Favs'));

export const App = () => {
  const {isAuth} = useContext(Context);
  return (
    <Suspense fallback={<div/>}>
      <GlobalStyle/>
      <Logo/>
      <Router>
          <NotFound default/>
          <Home path="/"/>
          <Home path="/pet/:id"/>
          <Detail path="/detail/:detailId"/>
          {!isAuth && <NotRegisteredUser path="/login"/>}
          {!isAuth && <Redirect noThrow from="/favs" to="/login"/>}
          {!isAuth && <Redirect noThrow from="/user" to="/login"/>}
          {isAuth && <Redirect from="/login" to="/"/>}
          <Favs path="/favs"/>
          <User path="/user"/>
      </Router>
      <NavBar/>
    </Suspense>
  )
}
