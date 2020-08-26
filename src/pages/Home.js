import React from "react";
import {ListOfCategories} from "../components/ListOfCategories";
import {ListOfPhotoCards} from "../container/ListofPhotoCards";
import  {Layout} from "../components/Layout";

export const Home = ({id}) => {
  return (
    <Layout title="Tu app de fotos de mascotas" subtitle="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos">
      <ListOfCategories/>
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}
