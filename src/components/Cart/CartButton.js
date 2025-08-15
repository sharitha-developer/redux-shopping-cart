import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { toggleActions } from '../../store/cart-toggle'
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const getCartItems = useSelector(state => state.addToCart.totalQuantity);
  function handleCartToggle() {
    dispatch(toggleActions.toggle());
  }
  return (
    <button className={classes.button} onClick={handleCartToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{getCartItems}</span>
    </button>
  );
};

export default CartButton;
