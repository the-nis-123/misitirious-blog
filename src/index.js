
import {StrictMode} from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './contexts/AuthContext';
import  AppContextProvider  from './contexts/AppContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppContextProvider>
          <AppRoutes /> 
        </AppContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
