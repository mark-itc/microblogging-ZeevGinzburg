import React from 'react';
import "./user-profile.css";
import Navbar from '../navbar';
import "../buttons.css";
import { useState, useEffect } from 'react';

let localSavedUserName;

// ill need to provide the user name to the original user name that showed in the tweets

function UserProfile() {

  let [userName, setUserName] = useState(localStorage.getItem("localSavedUserName") || "Somebody");
  const saveUserName = () => {
  localStorage.setItem("localSavedUserName", userName);
}
  const changeUserName = (e) => {
    setUserName(e.target.value);
  }


  return (
    <div className='main-user-profile-div'>
      <Navbar />

      <form className='user-name-form' onSubmit={saveUserName}>
        <h2 className='profile-title'>Profile</h2>
        <label >User Name</label>
        <input
          type='text'
          placeholder='Enter new user name'
          value={userName}
          onChange={changeUserName}
        />
        <div className='go-right'></div>
        <button className='save-user-name' type='submit'>
          Save
        </button>
      </form>




    </div>
  );
}

export default UserProfile;