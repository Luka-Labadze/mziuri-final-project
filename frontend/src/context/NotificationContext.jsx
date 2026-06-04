import { useRef, useContext, useState, useEffect, createContext } from "react";

const NotificationContext = createContext(); // ← this line was missing

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  const showNotification = (msg, duration = 3000) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    setNotification(msg);
    setVisible(false);

    setTimeout(() => setVisible(true), 10);

    timerRef.current = setTimeout(() => {
      setVisible(false);
    }, duration);
  };

  useEffect(() => {
    if (notification && !visible) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [notification, visible]);

  return (
    <NotificationContext.Provider value={{ showNotification, notification, visible }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);