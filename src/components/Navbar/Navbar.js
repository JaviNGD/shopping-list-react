import React from 'react'
import css from './navbar.module.css'
import { DarkMode } from '../DarkMode/DarkMode'
import { LanguageSelector } from '../LanguageSelector/LanguageSelector'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className={css.navbar}>
            <div className={css.left}>
                <ul>
                    <li><a href='https://github.com/JaviNGD' target='_blank' rel="noreferrer"><DiGithubBadge className={css.icon}/></a></li>
                    <li><a href='https://www.linkedin.com/in/JaviNGD' target='_blank' rel="noreferrer"><FaLinkedin className={css.icon}/></a></li>
                </ul>
            </div>
            <div className={css.right}>
                <ul>
                    <li><LanguageSelector /></li>
                    <li><DarkMode /></li>
                </ul>
            </div>
        </nav>
    )
}

export { Navbar };