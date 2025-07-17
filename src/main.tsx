import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client.tsx';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider > 
      <CartProvider>
        <App />
      </CartProvider>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);