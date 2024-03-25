import React from 'react'
import css from './modal.module.css';
import { createPortal } from 'react-dom';

function Modal ({children}) {
    return createPortal (
        <div className={css.modalContainer}>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };