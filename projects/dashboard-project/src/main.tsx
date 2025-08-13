import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'antd/dist/reset.css'
import BookingWrapper from './context/BookingContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookingWrapper>
         <App />
    </BookingWrapper>
  </StrictMode>,
)
