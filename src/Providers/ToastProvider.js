import React, { createContext, useState } from 'react';

export const ToastContext = createContext();

export const ToastProvider = (props) => {

    const [toast, setToast] = useState(false);

    return (
        <ToastContext.Provider value={[toast, setToast]}>{props.children}</ToastContext.Provider>
    );
}

export default ToastProvider;