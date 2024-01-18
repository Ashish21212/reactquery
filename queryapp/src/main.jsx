import React from 'react'
import ReactDOM from 'react-dom';


import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
const queryClient=new QueryClient();
ReactDOM.render(
  <>
  
      
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
  
<App/>
<Menu/>
</BrowserRouter>
       </QueryClientProvider>
  </>,
  document.getElementById("root")
)
