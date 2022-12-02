import React from 'react';
import "./user-profile.css";
import Navbar from '../navbar';
import "../buttons.css";

 function UserProfile() {
  return (
  <div className='main-user-profile-div'>
    <Navbar />

    <form className='user-name-form' onSubmit="">
          <h2 className='profile-title'>Profile</h2>
          <label >User Name</label>
          <input
            type='text'
            placeholder='Enter new user name'
            // value={""}
            // onChange={""}
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