import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'

import resumeData from '../../utils/resumeData.js'
import './Portfolio.css'

const Portfolio = () => {

    const [tabValue, setTabValue] = React.useState("All");
    const [projectDialog, setProjectDialog] = React.useState(false);

    function handleChange(event, newValue) {
         setTabValue(newValue)}

    return (
        <Grid container spacing={1} className="section pt_45 pb_45">
            {/* Title */}

            <Grid item className="section_title mb_20">
                <span></span>
                <h6 className="section_title_text">Portfolio</h6> 
            </Grid>

            {/* Tabs */}

            <Grid item xs={12} className="">

                        <Tabs
                        value={tabValue}
                        indicatorColor='white'
                        className="customTabs"
                        onChange={handleChange}>
                            <Tab
                                label='All'
                                value='All'
                                className={
                                    tabValue=== 'All' ? 'customTabs_item active' : 'customTabs_item'} />

                            {[...new Set(resumeData.projects.map(item => item.tag))].map(tag => (
                                <Tab label={tag} value={tag} className={
                                    tabValue=== tag ? 'customTabs_item active' : 'customTabs_item'} />
                            ))}        
                        </Tabs>
                </Grid>

            {/* Projects */}

            <Grid item xs={12}>
                <Grid container spacing={4}>
                    {resumeData.projects.map((project) => (
                        <>
                        {tabValue === project.tag || tabValue === "All" ? 
                        (<Grid item xs={12} sm={6} md={4}>
                            <Grow in timeout={1000}>
                                <Card className='customCard' onClick={() => setProjectDialog(project)}>
                                    <CardActionArea>
                                        <CardMedia component="img" className='customCard_image' image={project.image} title={project.title} alt={project.caption} />
                                        <CardContent>
                                            <Typography variant='body2' className='customCard_title'>{project.title}</Typography>
                                            <Typography variant="caption" className="customCard_caption" >{project.caption}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grow>
                        </Grid> ) : null}
                        
                        </>
                    ))}
                </Grid>
            </Grid>

            {/* Dialog */}

            <Dialog className='projectDialog' fullWidth maxWidth={"sm"} open={projectDialog} onClose={() => setProjectDialog(false)}>
                <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
                <img src={projectDialog.image} alt={projectDialog.description} className='projectDialog_image'/>
                <DialogContent>
                    <Typography className="projectDialog_description">{projectDialog.description}</Typography>
                    
                </DialogContent>
                <DialogActions className="projectDialog_actions">
                    {projectDialog?.links?.map(link => (
                        <a href={link.link} target='_blank' rel="noreferrer" className="projectDialog_icon">{link.icon}</a>
                    ))}
                </DialogActions>
            </Dialog>

        </Grid>
    )
}

export default Portfolio
