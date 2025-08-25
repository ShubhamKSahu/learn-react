import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQty= useSelector(state => state.cart.totalQuantity)
  function myCartHandler(){
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={myCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQty}</span>
    </button>
  );
};

export default CartButton;
