import React from "react";
import {ListOfCategories} from "./components/ListOfCategories";
import {Logo} from "./components/Logo";

import {GlobalStyle} from "./styles/GlobalStyles";
import {ListOfPhotoCards} from "./container/ListofPhotoCards";


export const App = () => (
  <div>
    <GlobalStyle/>
    <Logo/>
    <ListOfCategories/>
    <ListOfPhotoCards categoryId={1} />
  </div>
)
