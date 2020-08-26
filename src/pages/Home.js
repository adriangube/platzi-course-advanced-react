import React, {Fragment} from "react";
import {ListOfCategories} from "../components/ListOfCategories";
import {ListOfPhotoCards} from "../container/ListofPhotoCards";


export const Home = () => {
  return (
    <Fragment>
      <ListOfCategories/>
      <ListOfPhotoCards categoryId={1} />
    </Fragment>
  )
}
