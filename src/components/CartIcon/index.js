import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container } from './styles';
import Context from '../../context/Context';

function CartIcon() {
  const { itemCount } = useContext(Context);
  return (
    <Container>
      <Link
        className="cart-link"
        to="/carrinho"
      >
        <AiOutlineShoppingCart />
        <span>{itemCount}</span>
      </Link>
    </Container>
  );
}

export default CartIcon;
