import React from 'react'
import {
    Nav,
    Navbar,
} from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavLink } from "react-router-dom"

import './Header.css'
import { HomeRounded, Telegram } from '@mui/icons-material';
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

import resumeData from '../../utils/resumeData.js'
import CustomButton from '../Button/CustomButton'

const Header = (props) => {

    const pathName = props.location && props.location.pathname

    return (
        <Navbar
            // expand="lg"
            sticky='top'
            className='header'>
        {/* Home Link */}
        <Nav.Link as={NavLink} to='/' className={"p-0 m-0"}>
            <Navbar.Brand className="header_home" href="#home">
                <HomeRounded />
            </Navbar.Brand>
            </Nav.Link>

            {/* <Navbar.Toggle /> */}

            {/* <Navbar.Collapse> */}
                <Nav className="header_left">
                {/* Resume Link */}
                    <Nav.Link
                        as={NavLink}
                        to='/'
                        className={
                            pathName === "/" ? 'header_link_active' : "header_link"}>
                        Resume
                    </Nav.Link>

                {/* Portfolio Link */}
                    <Nav.Link
                        as={NavLink}
                        to='/portfolio'
                        className={
                            pathName === "/portfolio" ? 'header_link active' : "header_link"
                        }>
                        Portfolio
                    </Nav.Link>    
                </Nav>

                <div className='header_right'>
                    {Object.keys(resumeData.socials).map(key => (
                        <a href={resumeData.socials[key].link} target="_blank" rel="noreferrer">{resumeData.socials[key].icon}</a>
                    ))}
                    <div className="hireMe_btn">
                        <CustomButton url={"mailto:jamescarr1018@gmail.com"} text={"Hire Me"} icon={<Telegram />} />    
                    </div>
                </div>

            {/* </Navbar.Collapse> */}
        </Navbar>
    )
}

export default Header
