import React , {useState} from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
width:100px;
height:50px;
background-color:${(props) => (props.isActive ? "#6f04ff" : "#333")};
color: #fff;
font-size: 16px;
border:none;
border-radius:20px;
`;


export default function ToggleButton(){
    const [isActive,setIsActive] = useState(false);


    return (
        <div>
            <StyledButton isActive={isActive} onClick = {() => setIsActive(!isActive)}>
                {isActive ? 'on' : 'off'}
            </StyledButton>
        </div>
    )
}