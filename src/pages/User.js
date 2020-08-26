import React, {useContext, Fragment} from "react";
import {Context} from "../Context";
import {SubmitButton} from "../components/SubmitButton";
import {Layout} from "../components/Layout";

export const User = () => {
  const {removeAuth} = useContext(Context);
  return <Layout title="Usuario">
    <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
  </Layout>
}
