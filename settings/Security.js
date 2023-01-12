import React, { useState } from 'react'



export default function SettingsSecurity() {
    // here we have a state that is set and has a default of base which will be the page that first should be rendered 
    const [activeSection, setActiveSection] = useState('base')


    const changeActiveSection = section => {
        setActiveSection(section)
    }

    // This is the secruity tab which also has a base state which shows the selct from the menu below then once pressed on the 2 factor authentication the state will be change and the two factor section will be displayed 
    
    return (
        <div>
            <div className='security-setting-content'>
                {/* if the state is base show block */}
                <div style={{ display: activeSection === 'base' ? 'block' : 'none' }}>
                    <div>
                        <h2 className='settings-content-tabs'>Security</h2>
                    </div>
                    <div className='your-security-description'>
                        <p style={{ color: 'gray' }}>Select from the security menu below</p>
                    </div>
                    <div className='settings-content-tabs'>
                        <h2 onClick={() => changeActiveSection('two-factor')}>Two-Factor authentication</h2>
                    </div>
                </div>
            </div>
            <div>
                {/* if the state is two-factor show block aka which would be the two-factor authentication page */}
                <div style={{ display: activeSection === 'two-factor' ? 'block' : 'none' }}>
                    <h1 onClick={() => changeActiveSection('base')}>
                        Two-Factor Authentication
                    </h1>
                </div>
            </div>
        </div>

    )
}