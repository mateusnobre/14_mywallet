import styled from "styled-components"

import React, { useState } from "react";

export default function Input(props){
    const [input, setInput] = useState("");
    return(
    <InputBox>
        <input
          type={props.type}
          placeholder={props.placeholder}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></input>
    </InputBox>)
}

const InputBox = styled.div`
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