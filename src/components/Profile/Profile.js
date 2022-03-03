import { Typography } from '@mui/material'
import React from 'react'
import "./Profile.css"
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/Timeline.js'
import CustomButton from '../Button/CustomButton.js'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DownloadIcon from '@mui/icons-material/Download';


import resumeData from '../../utils/resumeData'
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';

import resumePDF from '../../assets/pdfs/Resume2021JCARR.pdf'

const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className="timeline_content">
            {link ? (
                <Typography className="timelineItem_text"><span>{title}:</span> <a href={link} target="blank">{text}</a></Typography>
            ) : (
                <Typography className="timelineItem_text"><span>{title}:</span> {text}</Typography>
            )}
        </TimelineContent>
    </TimelineItem>
)

const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>

            <figure className="profile_image">
                <img src={require('../../assets/images/jacProfPic.jpeg')} alt="profile"/>
            </figure>

            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineIcon />}>
                    <CustomTimelineItem title="Name" text={resumeData.name} />
                    <CustomTimelineItem title="Title" text={resumeData.title} />
                    <CustomTimelineItem title="Email" text={resumeData.email} />

                    {Object.keys(resumeData.profilesocials).map((key) => (
                        <CustomTimelineItem title={key} text={resumeData.profilesocials[key].text} link={resumeData.profilesocials[key].link} />
                    ))}

                </CustomTimeline>
                <div className="button_container">
                <CustomButton url={resumePDF} text={"Download Cv"} icon={<DownloadIcon />} ></CustomButton>
                </div>
            </div>

        </div>
    )
}

export default Profile
