import React from 'react'
import Button from '@mui/material/Button';

import './CustomButton.css'

const CustomButton = ({text,icon,url}) => {
    return (
        <Button
            href={url ? url : null }
            className="custom_btn"
            endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null }>
            <span className="btn_text">{text}</span>
        </Button>
    )
}

export default CustomButton
