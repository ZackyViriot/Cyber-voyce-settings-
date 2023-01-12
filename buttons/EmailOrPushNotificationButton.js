//imports 
import React, {useState} from 'react'
import styled from 'styled-components'

// This is going to be a resuable button 

const StyledButton = styled.button`
    width:200px;
    height:25px;
    background-color:${(props) => (props.isActive ? "#6f04ff" : "#6f04ff")};
    border:none;
    border-radius:20px;
    margin-left:250px;
    margin-top:20px
`;

export default function EmailOrPushNotificationsButton(){
    // There is going to be a state so that way you are able to toggle between email and push notifications when one is pressed 
    const [isActive,setIsActive] = useState(false);


    return (
        <div>
            <StyledButton isActive = {isActive} onClick = {() => setIsActive(!isActive)} style={{color:'white'}}>
                {/* As you can see here this is going based off the state  */}
                {isActive ? 'Email' : 'Push Notifications'}
            </StyledButton>
        </div>
    )
}