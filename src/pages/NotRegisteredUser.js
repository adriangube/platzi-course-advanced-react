import React, {Fragment, useContext} from "react";
import {Context} from "../Context";
import {UserForm} from "../components/UserForm";
import {RegisterMutation} from "../container/RegisterMutation";
import {LoginMutation} from "../container/LoginMutation";


export const NotRegisteredUser = () => {
  const {activateAuth} = useContext(Context);
  return <Fragment>
    <RegisterMutation>
      {
        (register, {loading, error}) => {
          const onSubmit = ({email, password}) => {
            const input = {email, password};
            const variables = {input}
            register({variables}).then((data) => {
              const {singup} = data;
              activateAuth(singup);
            });
          }
          const errorMsg = error && 'El usuario ya existe.';
          return <UserForm error={errorMsg} disabled={loading} onSubmit={onSubmit} title="Registrarse"/>
        }
      }

    </RegisterMutation>

    <LoginMutation>
      {
        (login, {loading, error}) => {
          const onLogin = ({email, password}) => {
            const input = {email, password};
            const variables = {input};
            login({variables}).then(({data}) => {
              const {login} = data;
              activateAuth(login);
            })
          }
          const errorMsg = error && 'Usuario y/o contraseña incorrectos.';
          return <UserForm error={errorMsg} disabled={loading}   onSubmit={onLogin} title="Iniciar sesión"/>
        }
      }
    </LoginMutation>
  </Fragment>
}
