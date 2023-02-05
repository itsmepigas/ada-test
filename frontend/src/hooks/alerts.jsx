import React, { useContext, createContext, useState } from 'react';

// components
import { Alert } from '../components/Alerts';

const AlertsContext = createContext({});

export function AlertsProvider({ children }) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState(null);

  function alert(title, content) {
    setAlertData({ title, content });
    setShowAlert(true);
  }

  return (
    <AlertsContext.Provider value={{
      alert
    }}>
      {children}
      { showAlert && <Alert title={alertData?.title} content={alertData?.content} onClose={() => {
        setShowAlert(false)
        setAlertData(null)
      }}/>}
    </AlertsContext.Provider>
  );
}

export function useAlerts(){
  const context = useContext(AlertsContext);
  return context
}