import { BrowserRouter } from "react-router-dom"

import { AppProvider } from "./hooks"
import { Router } from "./Router"

export function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProvider>
  )
}
