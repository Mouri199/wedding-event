import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from "react-router-dom";
import './index.css'
import router from './Components/Route/Route';
import AuthContributor from './Components/Contributor/AuthContributor';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContributor>
    <RouterProvider router={router} />
    </AuthContributor>
    
  </React.StrictMode>,
)
