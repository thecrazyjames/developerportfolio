import React from 'react'

import {Grid, Typography, Paper, TextField} from '@mui/material'
import WorkIcon from '@mui/icons-material/Work';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';


import './Resume.css'
import resumeData from '../../utils/resumeData'
import CustomTimeline, {CustomTimelineSeparator} from '../../components/Timeline/Timeline.js'

import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineDot from '@mui/lab/TimelineDot'
import CustomButton from '../../components/Button/CustomButton';

const Resume = () => {
    return (
        
        <>

        {/* About Me */}

        <Grid container className="section pb_45 pt_45">
            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">About Me</h6> 
            </Grid>
            <Grid item xs={12}>
                
                <Typography variant="body2" className="aboutme_text">{resumeData.aboutMe}</Typography>
            </Grid>
        </Grid>

        {/* Education and Experiences */}

        <Grid container className="section">
            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Resume</h6> 
            </Grid>
            <Grid item xs={12}>
                <Grid container className="resume_timeline">

                {/* Working Experience */}
                    <Grid item sm={12} md={6} className="">
                        <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                            {resumeData.experiences.map((experience) => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">
                                                {experience.title}
                                            </Typography>
                                            <Typography variant="caption" className="timeline_date">
                                                {experience.date}
                                            </Typography>
                                            <Typography variant="body2" className="timeline_description">
                                                {experience.description}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                        </CustomTimeline>
                    </Grid>

                {/* Education */}
                <Grid item sm={12} md={6} className="">
                        <CustomTimeline title="Education" icon={<SchoolRoundedIcon />}>
                            {resumeData.education.map((education) => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">
                                                {education.title}
                                            </Typography>
                                            <Typography variant="caption" className="timeline_date">
                                                {education.date}
                                            </Typography>
                                            <Typography variant="body2" className="timeline_description">
                                                {education.description}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                        </CustomTimeline>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        {/* Services */}

        <Grid container className="section pb_45">
            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Services</h6> 
            </Grid>  

            <Grid item xs={12}>
                <Grid container spacing={3} justify="space-around">
                    {resumeData.services.map((service) => (
                        <Grid item xs={12} sm={6} md={3}>
                            <div className="service">
                                <div className="service_icon">{service.icon}</div>
                                <Typography className="service_title" variant="h6">
                                    {service.title}
                                </Typography>
                                <Typography className="service_description" variant="body2">
                                    {service.description}
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>

        {/* Skills */}

        <Grid container className="section graybg pb_45 p_50">
            <Grid item xs={12}>
                <Grid container justify="space-bewteen" spacing={3}>
                    {resumeData.skills.map((skill) => (
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper elevation={0} className="skill">
                                <Typography variant='h6' className="skills_title">
                                    {skill.title}
                                </Typography>
                                {skill.description.map((element) => (
                                    <Typography variant="body2" className="skill_description">
                                        <TimelineDot variant={'outlined'} className='timeline_dot'></TimelineDot>{element}
                                    </Typography>
                                ))}
                            </Paper>
                        </Grid>
                    ) )}
                </Grid>
            </Grid>
                                             
        </Grid>

        {/* Contact */}

        <Grid container spacing={5} className="section pt_45 p_50">
            {/* Contact Form */}
            <Grid item xs={12} lg={7}>
                <Grid container>
                    <Grid item className="section_title mb_30">
                        <span></span>
                        <h6 className="section_title_text">Contact Form</h6> 
                    </Grid>
                

                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name='name' label='Name' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name='email' label='E-mail' />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth name='message' label='Message' multiline rows={5} />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomButton text="Submit" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Contact Inoformation */}
            <Grid item xs={12} lg={5}>

                <Grid container>
                    {/* Section Title */}
                    <Grid item className="section_title mb_30">
                        <span></span>
                        <h6 className="section_title_text">Contact Information</h6> 
                    </Grid>

                    {/* Contact Info Items */}
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className="contactinfo_items">
                                    <span>Location:  </span>
                                    {resumeData.address}
                                </Typography>
                            </Grid>
                            {/* <Grid item xs={12}>
                                <Typography className="contactinfo_items">
                                    <span>Job:  </span>
                                    {resumeData.job}
                                </Typography>
                            </Grid> */}
                            <Grid item xs={12}>
                                <Typography className="contactinfo_items">
                                    <span>Email:  </span>
                                    {resumeData.email}
                                </Typography>
                            </Grid>                    
                        </Grid>
                    </Grid>

                    {/* Social Icons */}
                    <Grid item xs={12}>
                        <Grid container className="contactInfo_socialContainer">
                            {Object.keys(resumeData.socials).map(key => (
                                <Grid item className="contactInfo_social">
                                <a href={resumeData.socials[key].link} target="_blank" rel="noreferrer">
                                {resumeData.socials[key].icon}
                                </a>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    


                </Grid>


            </Grid>
            
        </Grid>

    </>
    )
}

export default Resume
