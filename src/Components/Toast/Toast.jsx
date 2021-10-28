import React, { useContext, useRef } from 'react';
import { ToastContext } from '../../Providers/ToastProvider';
import styles from './Toast.module.scss';


const Toast = ({type, message}) => {

    const [toast, setToast] = useContext(ToastContext);
    const toastRef = useRef(null);
    let timeout;

    const triggerToast = (type) => {
        if(type == 'fromClose') {
            // DE REZOLVAT AICI

            toastRef.current.classList.remove(styles.show);
            setToast(false);
            return;
        } else if(toast) {
            toastRef.current.classList.add(styles.show);
            timeout = setTimeout(function () {
              toastRef.current.classList.remove(styles.show);
              setToast(false);
            }, 3000);
        }
    }

    triggerToast();


    let toastStyle;
    if(type == 'success') {
        toastStyle = {
            backgroundColor: "#268E6C",
        };
    }

    return (
        <div         
            ref={toastRef}
            className={styles.toast}
            style={{ ...toastStyle }}>
            <div className={styles.innerToast}>
                <img src={process.env.PUBLIC_URL + `/assets/${type}.svg`} />
                <div className={styles.toastMessage}>
                    {message}
                </div>
                <div className={styles.toastClose} onClick={() => triggerToast('fromClose')}>
                    X
                </div>
                </div>
        </div>
    )

}

export default Toast;

