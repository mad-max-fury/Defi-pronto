import React, { useEffect, useState } from 'react'
import { checkbox, infoIcon, loginIcon, logoutIcon } from '../../assets';

import classes from './Toast.module.css';

const Toast = ({success, info, danger, message, connected, icon, showToast, setShowToast}) => {
     
    let stroke, toastType;

  
        if(!danger) {
            setTimeout(() => {
                setShowToast(false);
            }, 5000)
        }
   

    const handleCtaClick = () => {
        setShowToast(false);
    }

    const cta = (<svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5L15 15M5 15L15 5L5 15Z" stroke={stroke = "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>);

  return (
    <div className={`${classes.toast} ${classes[toastType]} ${showToast ? '' : classes.hide__toast}`}>
        {icon &&   <div className={classes.toast__emoji}><span ><img src={success ? checkbox : info ? infoIcon : connected ? loginIcon : logoutIcon}/></span></div>}
        <div className={classes.toast__message}>  <h6>{message}</h6></div>
        <div onClick={handleCtaClick} className={classes.toast_action}> {cta} </div>
    </div>
  )
}

export {Toast}