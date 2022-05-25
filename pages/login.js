import React from "react";
import { AppContainer } from "../src/components/AppContainerComponent";
import { AppInput } from "../src/components/AppInputComponent";
import { AppButton } from "../src/components/AppButtonContainer";

const Login = props => {
    return (
      <AppContainer>
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