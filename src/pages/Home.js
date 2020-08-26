import React, {Fragment} from "react";
import {ListOfCategories} from "../components/ListOfCategories";
import {ListOfPhotoCards} from "../container/ListofPhotoCards";


export const Home = ({id}) => {
  return (
    <Fragment>
      <ListOfCategories/>
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  )
}
