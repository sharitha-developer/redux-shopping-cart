
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { toggleActions } from './store/cart-toggle';
import Notification from './components/UI/Notification';

let isInitial = true;


function App() {
  const dispatch = useDispatch();
  const isCartToggle = useSelector(state => state.cartToggle.cartToggle);
  const cart = useSelector(state => state.addToCart);
  const notification = useSelector(state => state.cartToggle.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(toggleActions.showNotification({
        status: 'pending',
        title: 'sending',
        message: 'Sending cart data!',
      }))
      const response = await fetch('https://react-test-a0c1f-default-rtdb.firebaseio.com/cart.json', { method: 'PUT', body: JSON.stringify(cart), });
      if (!response.ok) {
        throw new Error('Sending cart data failed.')
      }
      dispatch(toggleActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      }))
    }
    if(isInitial){
      isInitial = false;
      return;
    }
    sendCartData().catch(error => {
      dispatch(toggleActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      }))
    });
  }, [cart, dispatch]);

  return (
    <>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}  /> }
      <Layout>
        {!isCartToggle && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
