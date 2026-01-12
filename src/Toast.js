import React, { useEffect, useState } from 'react';
import './Toast.css';

const Toast = ({ message, isVisible, duration = 3000, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, duration - 300);

      const timer = setTimeout(() => {
        setIsExiting(false);
        onClose();
      }, duration);

      return () => {
        clearTimeout(timer);
        clearTimeout(exitTimer);
      };
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`toast-container ${isExiting ? 'exit' : ''}`}>
      <div className="toast-content">
        <svg className="toast-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <p className="toast-message">{message}</p>
      </div>
    </div>
  );
};

export default Toast;
