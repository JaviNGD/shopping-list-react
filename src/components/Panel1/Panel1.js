import React, { useContext } from 'react';
import css from './panel1.module.css';
import { Create } from '../Create/Create';
import { Progress } from '../Progress/Progress';
import { reactContext } from '../ReactContext/ReactContext';

export default function Panel1() {
    const { darkMode } = useContext(reactContext);

    return (
        <div className={`${css.panel1} ${darkMode ? `${css.p1Dark}` : `${css.p1Light}`}`}>
            <Create />
            <Progress />
        </div>
    );
}

export { Panel1 };
