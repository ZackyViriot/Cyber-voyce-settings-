import React from 'react'



export default function SettingsAccountInformation() {

    // this has basic layout for account information
    return (
        <div>
            {/* here you just have dummy data which will be filled with the backend later on but for the time being this is account information */}


            <div className='account-user-phone-email'>
                <h3>User Name</h3>
                <h5>@thedogman</h5>
                <input className='account-setting-change-button' type='text' placeholder='Change'></input>
                <h3>Phone</h3>
                <h5>+14209292934</h5>
                <input className='account-setting-change-button' type='text' placeholder='Change'></input>
                <h3>Email</h3>
                <h5>thedoggod420@gmail.com</h5>
                <input className='account-setting-change-button' type='text' placeholder='Change'></input>
            </div>
            <div className='country-language-gender-birthdate'>
                <h3>Country</h3>
                <h5>United States</h5>

                <h3>Language</h3>
                <h5>English</h5>

                <h3>Gender</h3>
                <h5>Male</h5>

                <h3>Birthdate</h3>
                <h5>Jan 6,1997</h5>

            </div>
        </div>
    )


}