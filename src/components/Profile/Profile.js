import { Typography } from '@mui/material'
import React from 'react'
import "./Profile.css"

const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">James</Typography>
                <Typography className="title">Software Engineer</Typography>
            </div>
            <figure className="profile_image">
                <img src={require('../../assets/images/jacProfPic.jpeg')} alt="profile image"/>
            </figure>
            <div className="profile_information">
                Insert Timeline<br/>
                <button>my Button</button>
            </div>

        </div>
    )
}

export default Profile
