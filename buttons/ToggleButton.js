import React , {useState} from 'react'
import styled from 'styled-components'

// This is going to be a reusable component that you can use any where in the application on and off instead of making the button over and over 
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
    //using a state to toggle on and off in the button 
    const [isActive,setIsActive] = useState(false);


    return (
        <div>
            <StyledButton isActive={isActive} onClick = {() => setIsActive(!isActive)}>
                {isActive ? 'on' : 'off'}
            </StyledButton>
        </div>
    )
}