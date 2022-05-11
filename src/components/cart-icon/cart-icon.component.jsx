import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen } = useContext(CartContext);

  const onShopIcon = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon onClick={onShopIcon} className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
