import React, { useContext } from 'react'
import css from './error.module.css'
import { reactContext } from '../ReactContext/ReactContext';

export default function Error() {
    const { darkMode } = useContext(reactContext);

    return (
        <div className={`${css.container} ${darkMode ? `${css.errorDark}` : `${css.errorLight}`}`}>
        <div className={css.error}>
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnNocHRtNGE1cmwwMHVhc213djYwbm9tNnRzd2l5ZW9iNXBndXJ1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XHyp1lYtfX4N0NNRiS/giphy.gif" alt="Loading" />
            <h2>An error has occurred</h2>
        </div>
    </div>
    )
}

export { Error };

