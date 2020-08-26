import React, {Fragment} from "react";
import Context from "../Context";
import {UserForm} from "../components/UserForm";
import {RegisterMutation} from "../container/RegisterMutation";


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

              const errorMsg = error && 'El usuario ya existe o ha ocurrido algún problema.';
               return <UserForm error={errorMsg} disabled={loading} onSubmit={onSubmit} title="Registrarse"/>
             }
           }

         </RegisterMutation>

         <UserForm onSubmit={activateAuth} title="Iniciar sesión"/>
       </Fragment>
     }
   }
 </Context.Consumer>
)
