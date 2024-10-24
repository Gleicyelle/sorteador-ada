import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import Home from './pages/home'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#FF0084',
        fontFamily: 'Arima, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue',
      },
    }}
  >
  <StrictMode>
    <Home />
  </StrictMode>
  </ConfigProvider>,
)
