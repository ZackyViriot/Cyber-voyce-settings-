//Imports
import React,{useState} from 'react'
import styled from 'styled-components'


//Custom style for the button 
const StyledButton = styled.button`
    width:200px;
    height:25px;
    background-color:${(props) => (props.isActive ? "#19191919" : "#333")};
    border:none;
    border-radius:20px;
    margin-left:250px;
    margin-top:20px;
    border:1px solid gray
`;

// This is going to be a reusable component that you can use an enable and disable button 

export default function DisableEnableButton(){
    const [isActive,setIsActive] = useState(false);

    return(
        <div>
              <StyledButton isActive = {isActive} onClick = {() => setIsActive(!isActive)} style={{color:'white'}}>
                {isActive ? 'Enable' : 'Disable'}
            </StyledButton>
        </div>
    )
}