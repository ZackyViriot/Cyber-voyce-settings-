import React , {useState} from 'react'
import styled from 'styled-components'


// This is the css for the button that way in app.css you don't have multiple and it is more clear

const StyledButton = styled.button`
    width:200px;
    height:25px;
    background-color:${(props) => (props.isActive ? "#191919" : "#191919")};
    border:none;
    border-radius:20px;
    margin-left:250px;
    margin-top:20px;
    border:1px solid gray;
`;


export default function SelectLangButton(){
    //once again you will set a state and that will be used to toggle between select langaugae and english 
    const [isActive,setIsActive] = useState(false)



    return(
        <div>
            <StyledButton isActive = {isActive} onClick = {() => setIsActive(!isActive)} style={{color:'white'}}>
                {isActive ? 'Select Language' : 'English'}
            </StyledButton>
        </div>
    )
}