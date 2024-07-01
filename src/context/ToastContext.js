import React, { createContext, useContext, useState, useCallback } from 'react';
import Toast from '../components/Toast';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    duration: 3000,
    type: 'default',
  });

  const showToast = useCallback((message, type = 'default', duration = 3000) => {
    setToast({
      visible: true,
      message,
      type,
      duration,
    });
  }, []);

  const clearToast = useCallback(() => {
    setToast({
      ...toast,
      visible: false,
    });
  }, [toast]);

  return (
    <ToastContext.Provider value={{ showToast, clearToast }}>
      {children}
      <Toast {...toast} onClear={clearToast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
