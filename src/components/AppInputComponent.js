import React from "react";

export const AppInput = props => (
    <div>
        <label>{props.children}</label>
        <input type={props.type} title={props.title}></input>
    </div>
)