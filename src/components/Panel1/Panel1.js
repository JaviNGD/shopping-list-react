import React from 'react'
import css from './panel1.module.css'
import { Create } from '../Create/Create';
import { Progress } from '../Progress/Progress';

export default function Panel1({items, setItems}) {
    const completed = items.filter(item => item.completed).length;
    const total = items.length;

    return (
        <div className={css.container1}>
            <Create />
            <Progress 
                completed={completed} 
                total={total} 
            />
        </div>
    )
}

export { Panel1 };
