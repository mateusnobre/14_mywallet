import styled from "styled-components"

import React from "react";

export default function Input(props){
    return(
    <InputBox>
        <input
          type={props.type}
          placeholder={props.placeholder}
          onChange={(e) => props.setInput(e.target.value)}
          value={props.input}
        ></input>
    </InputBox>)
}

const InputBox = styled.div`
    margin-bottom: 13px;
    input {
        width: 326px;
        height: 58px;
        background-color: white;
        color: #000000;
        font-size: 20px;
        padding-left: 15px;
        border: none;
        border-radius: 5px;
    }
`