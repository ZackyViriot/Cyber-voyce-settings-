import React, { useState } from 'react'

//imports 
import SettingsAccountInformation from './AccountInformation'
import SettingsChangePassword from './ChangePassword'
import SettingsAccountPurchaseHistory from './PurchaseHistory'
import Whitelist from './Whitelist'
import Blacklist from './Blacklist'

export default function SettingsAccount() {
    // We are going to use state to naviagte between the sections in settings this is for your account which has a lot of different components within
    const [activeSection, setActiveSection] = useState('base')

    //Funtion used to change the state when you click on a section that way you are able to navigate through easy 
    const changeActiveSection = section => {
        setActiveSection(section)
    }

  
    return (
        <div>
            {/* This line below basically will show the base state which will be the first page that you want to see and once you click on different the state will change showing different components essentially */}
            <div style={{ display: activeSection === 'base' ? 'block' : 'none' }}>
                <div>
                    <h2 className='settings-content-tabs'>Your Account</h2>
                </div>
                <div>
                    <p className='your-account-description' style={{ color: '#484848' }}>See information about your account, change your password, or learn about your account deactivation options</p>
                </div>
                {/* Below you will see the 5 different sections which have an onclick function that will change the state to what ever is passed which is important when deciding what data to be shown because if it not that state it wont show that section */}
                <div className='settings-content-tabs'>
                    <h2 onClick={() => changeActiveSection('accountInformation')}>Account Information</h2>
                </div>
                <div className='settings-content-tabs'>
                    <h2 onClick={() => changeActiveSection('changePassword')}>Change your Password</h2>
                </div>
                <div className='settings-content-tabs'>
                    <h2 onClick={() => changeActiveSection('purchaseHistory')}>Purchase history</h2>
                </div>
                <div className='settings-content-tabs'>
                    <h2 onClick ={() =>changeActiveSection('whitelist')}>Whitelist</h2>
                </div>
                <div className = 'settings-content-tabs'>
                    <h2 onClick = {() => changeActiveSection('blacklist')}>Blacklist</h2>
                </div>
            </div>
            <div>
                {/* Here is the first example of what I meant from above once it checks the state if the state is accountInformation it will show the block which is the settingsAccountInformation component I use this pattern all the way down */}
                <div style={{ display: activeSection === 'accountInformation' ? 'block' : 'none' }}>
                    <h1 className='settings-content-tabs' onClick={() => changeActiveSection('base')}>Account Information</h1>
                    <SettingsAccountInformation />
                </div>
                <div style={{ display: activeSection === 'changePassword' ? 'block' : 'none' }}>
                    <h1 className='settings-content-tabs' onClick={() => changeActiveSection('base')}>Change Password</h1>
                    <SettingsChangePassword />
                </div>
                <div style={{ display: activeSection === 'purchaseHistory' ? 'block' : 'none' }}>
                    <h1 className='settings-content-tabs' onClick={() => changeActiveSection('base')}>Purchase History</h1>
                    <SettingsAccountPurchaseHistory/>
                </div>
                <div style={{display: activeSection === 'whitelist' ? 'block' : 'none'}}>
                    <h1 className='settings-content-tabs' onClick={() => changeActiveSection('base')}>Whitelist</h1>
                    <Whitelist/>
                </div>
                <div style={{display: activeSection === 'blacklist' ? 'block' : 'none'}}>
                    <h1 className='settings-content-tabs' onClick={() => changeActiveSection('base')}>Blacklist</h1>
                    <Blacklist/>
                </div>
            </div>

        </div>

    )
}