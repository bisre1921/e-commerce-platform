import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/styles/bootstrap.custom.css"
import "./assets/styles/index.css"
import {createBrowserRouter , createRoutesFromElements, Route , RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import { Provider } from 'react-redux'
import store from './store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path='/product/:id' element={<ProductDetail />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)


