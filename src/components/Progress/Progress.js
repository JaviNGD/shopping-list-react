import React, { useContext } from 'react'
import css from './progress.module.css'
import { reactContext } from '../ReactContext/ReactContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function Progress() {
    const {completed, total} = useContext(reactContext);
    const progress = total === 0 ? 0 : Math.floor((completed / total) * 100);

    return (
        <div className={css.progress}>
            <h2>Progress</h2>
            <CircularProgressbar 
                className={css.progressCircle}
                value={progress} 
                text={`Items: ${completed} / ${total}`} 
                styles={buildStyles({
                
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                
                    // Text size
                    textSize: '16px',
                
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                
                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',
                
                    // Colors
                    pathColor: `rgba(62, 152, 199, ${progress / 100})`,
                    textColor: 'black',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}
            />
        </div>
    )
}

export { Progress };