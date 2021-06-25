import styled from 'styled-components'

export default function FormsButton(props){
    return(
        <FormsButtonBox>
            {props.text}
        </FormsButtonBox>
    )
}

const FormsButtonBox = styled.div`
    width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    color: white;
    text-align: center;
    line-height: 46px;
    font-weight: 700;
    margin-top: 13px;
    margin-bottom: 36px;
    user-select: none;
`