import React from "react";
import { AppContainer } from "../src/components/AppContainerComponent";
import { AppInput } from "../src/components/AppInputComponent";
import { AppButton } from "../src/components/AppButtonContainer";

export const Login = props => {
    return (
      <AppContainer>

          <h2>Login</h2>

        <AppInput 
            title="apelido ou email do usuário"
            label="Usuário"
            type="text"
        />
        <AppInput 
            label="Senha"
            type="Password"
            title="Senha do usuário"
        />
        <AppButton
            title="Entrar"
        />
      </AppContainer>
    );
  };
  
  export default Login;