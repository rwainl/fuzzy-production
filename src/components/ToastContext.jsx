import React from 'react'
import Toast from './Toast'
import { createContext, useState, useContext } from 'react'

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toastMessage, setToastMessage] = useState("");

    const showToast = (message) => {
        setToastMessage(message);
        setTimeout(() => setToastMessage(""), 4000);
    };

    return(
        <ToastContext.Provider value={{showToast}}>
            {children}
            {toastMessage && <Toast message={toastMessage} />}
        </ToastContext.Provider>
    )
};

export const useToast = () => useContext(ToastContext);