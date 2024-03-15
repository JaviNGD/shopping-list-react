import React from 'react'
import css from './navbar.module.css'
import { DarkMode } from '../DarkMode/DarkMode'
import { LanguageSelector } from '../LanguageSelector/LanguageSelector'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className={css.navbar}>
            <ul>
                <h1>Shopping List</h1>
                <li><a href='https://github.com/JaviNGD' target='_blank' rel="noreferrer"><DiGithubBadge /></a></li>
                <li><a href='https://www.linkedin.com/in/JaviNGD' target='_blank' rel="noreferrer"><FaLinkedin /></a></li>
                <li><LanguageSelector /></li>
                <li><DarkMode /></li>
            </ul>
        </nav>
    )
}

export { Navbar };