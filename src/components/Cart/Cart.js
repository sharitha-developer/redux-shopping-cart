import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const productItems = useSelector(state => state.addToCart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          productItems.map((items) => {
            return (
              <CartItem key={items.id} item={{
                id: items.id,
                title: items.title,
                quantity: items.quantity,
                total: items.total,
                price: items.price
              }} />
            )
          })
        }

      </ul>
    </Card>
  );
};

export default Cart;
