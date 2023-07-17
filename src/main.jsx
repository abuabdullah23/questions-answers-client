import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/routes.jsx'
import { Toaster } from 'react-hot-toast';

import {
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <Toaster />
    <RouterProvider router={router} />
  </QueryClientProvider>

)
