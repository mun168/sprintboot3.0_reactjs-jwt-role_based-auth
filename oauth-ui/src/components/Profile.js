import React from 'react'
import authService from '../services/authService'

const Profile = () => {


    const currentUser =     authService.getCurrentUser();

  return (
    <div className='container'>
        <header className='jumbotron'>
            <h3>
                <strong>{currentUser.username}</strong>Profile
            </h3>
        </header>
        <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
            <strong>Id:</strong>{currentUser.id}
        </p>
        <strong>Authorities</strong>
        <ul>
            {currentUser.roles.map((role,index)=>
            <li key={index}>
                {role}
            </li>)}
        </ul>
    </div>
  )
}

export default Profile