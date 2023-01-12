
import React from 'react'

//imports 
import EmailOrPushNotificationsButton from '../buttons/EmailOrPushNotificationButton'


export default function Notifications(){
    // basic html and css for the notifications page with an imported button for email or push notifications which you will map to the backend  also have the email or push notification button that is shown and used 
    return(
        <div className = 'settings-notifications-content-border'>
            <div className = 'settings-notifications-content'>
                <h2>Notifications</h2>
                <p style = {{color:'gray'}}>Select the kind of notifications you get about your interest</p>
            </div>
            <div className = 'settings-preferences-content-container'>
                <h3>Preferences</h3>
                <EmailOrPushNotificationsButton/>
            </div>
            <div className='settings-notifications-preferences-content'>
                <p style = {{color:'gray'}}>Choose between email or push notifications</p>
            </div>
        </div>
    )
}