import React, {useContext, Fragment} from "react";
import {Context} from "../Context";
import {SubmitButton} from "../components/SubmitButton";

export const User = () => {
  const {removeAuth} = useContext(Context);
  return <Fragment>
    <h1>Usuario</h1>
    <br/>
    <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
  </Fragment>
}
