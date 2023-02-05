import React from "react";

import { AlertsProvider } from "./alerts";
import { AuthProvider } from "./auth";
import { CardsProvider } from "./cards";


export function AppProvider({ children }) {
  return (
    <AlertsProvider>
      <AuthProvider>
        <CardsProvider>
          {children}
        </CardsProvider>
      </AuthProvider>
    </AlertsProvider>
  )
}