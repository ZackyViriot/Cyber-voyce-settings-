import React, { useState } from 'react'



//Imports 
import searchIcon from '../assets/Search.png'
import SettingsAccount from './settings/SettingsAccount'
import SettingsPrivacyAndSaftey from './settings/SettingsPrivacyAndSaftey'
import Langauges from './settings/Languages'
import Notifications from './settings/Notifications'
import Accessibility from './settings/Accessibility'
import SettingsSecurity from './settings/Security'
import SettingsHelpCenter from './settings/HelpCenter'





export default function SettingsPage() {
    // This is going to set a state and default state which will be the  your account because when you click on the settings that should be the first thing that is shown
    const [activeSection, setActiveSection] = useState('yourAccount')


    //This is a function to change the state which will be used when click on something which will change state and also change what is shown based on what the state is changed too 
    const changeActiveSection = section => {
        setActiveSection(section)
    }


    return (
        <div className='Home'>
            <div className="settings-container">
                <div className = 'settings-title'>
                    <h2>Settings</h2>
                </div>
                <div className="settings-searchBox">
                    <img src={searchIcon} alt="search icon" />
                    <input type="text" placeholder="Search Settings"></input>
                </div>
                <div className='settings-pages'>
                    <div className='settings-pagesBtn'>
                        {/* Here is the first example and every other section is the same once click on it will change the state to that state and you will check to see if that state is shown and if it is you will display the shown state and nothing else */}
                        <h3 onClick={() => changeActiveSection('yourAccount')}>
                            Your Account
                        </h3>
                    </div>
                    <div className='settings-pagesBtn'>
                        <h3 onClick={() => changeActiveSection('privacyAndSaftey')}>
                            Privacy and safety
                        </h3>
                    </div>
                    <div className='settings-pagesBtn'>
                        <h3 onClick={() => changeActiveSection('notifications')}>
                            Notifications
                        </h3>
                    </div>
                    <div className = 'settings-pagesBtn'>
                        <h3 onClick = {() => changeActiveSection('languages')}>
                            Languages
                        </h3>
                    </div>
                    <div className='settings-pagesBtn'>
                        <h3 onClick={() => changeActiveSection('accessibility')}>
                            Accessibility
                        </h3>
                    </div>
                    <div className='settings-pagesBtn'>
                        <h3 onClick={() => changeActiveSection('security')}>
                            Security
                        </h3>
                    </div>
                    <div className='settings-pagesBtn'>
                        <h3 onClick={() => changeActiveSection('helpCenter')}>
                            Help Center
                        </h3>
                    </div>
                </div>
            </div>
            <div>
                <div className='settings-content'>
                    {/* Now this is where things will go in each section */}
                    {/* here is the first example and everything follows the same pattern checks to see if the active section is equal to the correponding state for that section if so it will show block which is the component if not it will not  */}
                    <div style={{ display: activeSection === 'yourAccount' ? 'block' : 'none' }}>
                        <SettingsAccount/>
                    </div>
                    <div style={{ display: activeSection === 'privacyAndSaftey' ? 'block' : 'none' }}>
                        <SettingsPrivacyAndSaftey/>
                    </div>
                    <div style={{ display: activeSection === 'notifications' ? 'block' : 'none' }}>
                        <Notifications/>
                    </div>
                    <div style = {{display:activeSection === 'languages' ? 'block':'none'}}>
                        <Langauges/>
                    </div>
                    <div style={{ display: activeSection === 'accessibility' ? 'block' : 'none' }}>
                        <Accessibility/>
                    </div>
                    <div style={{ display: activeSection === 'security' ? 'block' : 'none' }}>
                        <SettingsSecurity/>
                    </div>
                    <div style={{ display: activeSection === 'helpCenter' ? 'block' : 'none' }}>
                        <SettingsHelpCenter/>
                    </div>
                </div>
            </div>

        </div>

    )
}