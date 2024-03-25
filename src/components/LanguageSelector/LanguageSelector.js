import React from 'react'
import css from './languageSelector.module.css'

export default function LanguageSelector() {
    return (
        <div className={css.language}>
            En  Es
        </div>
    )
}

export { LanguageSelector };