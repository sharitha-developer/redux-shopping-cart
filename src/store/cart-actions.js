import { toggleActions } from "./cart-toggle";
import { addToCartAction } from "./add-to-cart";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://react-test-a0c1f-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }
            const data = await response.json();     
               
            return data;
        }
        try {
          const cartData = await fetchData();
          
          dispatch(addToCartAction.replaceCart({
            items:cartData.items || [],
            totalQuantity: cartData.totalQuantity,  
        }));
        }
        catch (error) {
            dispatch(toggleActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!',
            }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(toggleActions.showNotification({
            status: 'pending',
            title: 'sending',
            message: 'Sending cart data!',
        }));
        const sendRequest = async () => {
            const response = await fetch('https://react-test-a0c1f-default-rtdb.firebaseio.com/cart.json', { method: 'PUT', body: JSON.stringify({items:cart.items, totalQuantity:cart.totalQuantity}), });
            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }

        };

        try {
            await sendRequest();
            dispatch(toggleActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!',
            }))
        } catch (error) {
            dispatch(toggleActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!',
            }))
        }
    };
}