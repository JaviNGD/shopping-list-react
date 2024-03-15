import React from 'react'
import css from './panel1.module.css'
import { Create } from '../Create/Create';
import { Progress } from '../Progress/Progress';

export default function Panel1() {
    return (
        <div className={css.container1}>
            <Create />
            <Progress 
                completed={5} 
                total={10} 
            />
        </div>
    )
}

export { Panel1 };
