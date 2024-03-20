import React from 'react'
import css from './loading.module.css'

export default function Loading() {
    return (
        <div className={css.container}>
            <div className={css.loader}>
                <img src="https://i.gifer.com/XOsX.gif" alt="Loading" />
                <h1>Loading...</h1>
            </div>
        </div>
    )
}

export { Loading };