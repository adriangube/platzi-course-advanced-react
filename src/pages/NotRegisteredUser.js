import React, {Fragment} from "react";
import Context from "../Context";
import {UserForm} from "../components/UserForm";
import {RegisterMutation} from "../container/RegisterMutation";
import {LoginMutation} from "../container/LoginMutation";


export const NotRegisteredUser = () => (
 <Context.Consumer>
   {
     ({activateAuth,}) => {
       return <Fragment>
         <RegisterMutation>
           {
             (register, {data, loading, error}) => {
              const onSubmit = ({email, password}) => {
                const input = {email, password};
                const variables = {input}
                register({variables}).then(activateAuth);
              }
              const errorMsg = error && 'El usuario ya existe.';
               return <UserForm error={errorMsg} disabled={loading} onSubmit={onSubmit} title="Registrarse"/>
             }
           }

         </RegisterMutation>

         <LoginMutation>
           {
             (login, {data, loading, error}) => {
               const onLogin = ({email, password}) => {
                 const input = {email, password};
                 const variables = {input};
                 login({variables}).then(activateAuth)
               }
               const errorMsg = error && 'Usuario y/o contraseña incorrectos.';
               return <UserForm error={errorMsg} disabled={loading}   onSubmit={onLogin} title="Iniciar sesión"/>
             }
           }
         </LoginMutation>
       </Fragment>
     }
   }
 </Context.Consumer>
)
