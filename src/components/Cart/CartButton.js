import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { toggleActions } from '../../store/cart-toggle'

const CartButton = (props) => {
  const dispatch = useDispatch();
  function handleCartToggle() {
    dispatch(toggleActions.toggle());
  }
  return (
    <button className={classes.button} onClick={handleCartToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
