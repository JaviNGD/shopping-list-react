import React, { useContext } from 'react'
import css from './progress.module.css'
import { reactContext } from '../ReactContext/ReactContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function Progress() {
    const {completed, total, darkMode} = useContext(reactContext);
    const progress = total === 0 ? 0 : Math.floor((completed / total) * 100);

    return (
        <div className={`${css.progress} ${darkMode ? `${css.progressDark}` : `${css.progressLight}`}`}>
            <h2>Progress</h2>
            <CircularProgressbar 
                className={css.progressCircle}
                value={progress} 
                text={`Items: ${completed} / ${total}`} 
                styles={buildStyles({
                
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                
                    // Text size
                    textSize: '12px',
                
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                
                    // Colors
                    pathColor: `rgba(62, 152, 199, ${progress / 100})`,
                    textColor: darkMode ? 'white' : 'black',
                    trailColor: 'var(--progress-bar)',
                    backgroundColor: 'var(--progress)',
                })}
            />
        </div>
    )
}

export { Progress };