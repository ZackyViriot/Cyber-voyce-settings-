import React from 'react'
import ToggleButton from '../buttons/ToggleButton'



// This is going to be the accessibility page  also where you are able to change to light mode and dark mode 
export default function Accessibility() {
    return (
        <div>
            <div className="accessibility-header">
                <h2>Accessibility</h2>
                <p style={{ color: 'gray' }}>Change your Cybervoyce experience</p>
            </div>
            <div className='accessibility-lightmode'>
                <h3>Light Mode</h3>
                <div className='accessibility-lightmode-toggle-button'>
                    {/* to make light mode on and off */}
                    <ToggleButton />
                </div>
            </div>

        </div>
    )
}