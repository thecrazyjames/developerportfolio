import { TabPanel } from '@mui/lab'
import { Box, Grid, Tab, Tabs } from '@mui/material'
import React from 'react'

import './Portfolio.css'

const Portfolio = () => {

    const [tabValue, setTabValue] = React.useState("All");

    function handleChange(event, newValue) {
         setTabValue(newValue)}

    return (
        
        <Grid container className="section pt_45 pb_45">
        {/* Title */}

            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Portfolio</h6> 
            </Grid>

        {/* Tabs */}

            <Grid item className="">
            
                    <Tabs
                    value={tabValue}
                    indicatorColor='white'
                    className="custom_tabs"
                    onChange={handleChange}></Tabs>
            </Grid>
        </Grid>
    )
}

export default Portfolio
