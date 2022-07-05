import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/Hrishikesh-roy" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/DEVHrishi" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
            <a href="https://leetcode.com/DEVHrishi/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
        </div>
    )
}

export default HeaderSocials