import React, { useContext } from 'react'
import css from './empty.module.css'
import { reactContext } from '../ReactContext/ReactContext';

export default function Empty() {
    const { darkMode } = useContext(reactContext);

    return (
        <div className={`${css.container} ${darkMode ? `${css.emptyDark}` : `${css.emptyLight}`}`}>
            <div className={css.empty}>
                <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHplZHVwYjF4NGNmZjNocXdzOWU1MTR3d2Y5aWlhaHFxY2poemJpZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/mcaH3uGYxz6PbU8cdw/giphy.gif" alt="Loading" />
                <h2>Create a new item</h2>
            </div>
        </div>
    )
}

export { Empty };