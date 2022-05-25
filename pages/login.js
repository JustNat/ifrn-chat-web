import React from "react";
import { AppContainer } from "../src/components/AppContainerComponent";

const AppInput = props => (
    <div>
        <label>{props.children}</label>
        <input type={props.type} title={props.title}></input>
    </div>
)
const AppButton = props => (
    <div>
        <input type="submit" title={props.tytle}></input>
    </div>
)

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