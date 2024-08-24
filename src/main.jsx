import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import ConectionProvider from './connectionContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConectionProvider>
      <App />
    </ConectionProvider>
  </React.StrictMode>,

)
