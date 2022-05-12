import React from 'react'
import Cart from './Cart'
import Home from'./Home'
import{CartProvider } from'react-use-cart'
const App = () => {
  return (
    <div>
     <CartProvider>
     <Home/>
     <Cart/>
     </CartProvider>
     
    </div>
  )
}

export default App