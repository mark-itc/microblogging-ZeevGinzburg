import React from 'react';
import "./user-profile.css" 
import Navbar from '../navbar';

 function UserProfile() {
  return (
  <div className='main-user-profile-div'>
    <Navbar />
    <h2 style={{"color": "red"}}>user profile - test</h2>
    </div>
  );
}

export default UserProfile;