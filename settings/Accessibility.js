import React from 'react'
import ToggleButton from '../buttons/ToggleButton'


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
                    <ToggleButton />
                </div>
            </div>

        </div>
    )
}