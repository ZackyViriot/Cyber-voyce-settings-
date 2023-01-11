import React, { useState } from 'react'




export default function SettingsHelpCenter() {
    const [activeSection, setActiveSection] = useState('base')
    // This is simular to some of the other components you have a base state which is the default page for help center and one you click on faq the state will change to faq and will hide the base state and display the change state 
    const changeActiveSection = section => {
        setActiveSection(section)
    }


    return (
        <div>
            <div className='settings-help-center'>
                <div style={{ display: activeSection === 'base' ? 'block' : 'none' }}>
                    <div className='settings-help-center-header'>
                        <h2>Help Center</h2>
                        <p style={{ color: 'gray' }}>Need help? Contact us!</p>
                        <input className='settings-help-center-input' type='text' placeholder='Ask us a question'></input>
                        <button className='settings-help-center-input-save' type='button'>Save</button>
                    </div>
                    <div className='settings-help-center-main'>
                        <div className='settings-help-center-main-h2'>
                            <h2 onClick={() => changeActiveSection('faq')}>
                                FAQ
                            </h2>
                        </div>

                    </div>
                </div>
            </div>
            <div className='settings-faq-content' style={{ display: activeSection === 'faq' ? 'block' : 'none' }}>
                <h2 onClick={() => changeActiveSection('base')}>FAQ</h2>
            </div>


        </div>
    )

}