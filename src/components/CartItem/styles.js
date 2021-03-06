import styled from 'styled-components';

export const Container = styled.div`
  .cart-item {
    align-items: center;
    display: flex;
    gap: 1em;
    justify-content: center;
    padding: 1em 2em;
    position: relative;
  }

  .cart-item:after {
    background-color: rgba(0, 0, 0, 0.2);
    bottom: 0;
    content: '';
    height: 1px;
    position: absolute;
    width: 100%;
  }

  .remove-item {
    background: none;
    border: none;
    color: red;
    cursor: pointer;
    font-size: 1.2em;
  }

  .item-image {
    width: 6em;
  }

  .item-title {
    flex-basis: 30em;
    text-align: left;
  }

  .quantity-container {
    align-items: stretch;
    display: flex;
  }

  .quantity-container button {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: grid;
    font-size: 1em;
    padding: 0.2em 0.5em;
    place-items: center;
  }

  .quantity-container button:active {
    transform: scale(0.9);
  }

  .quantity-container button svg {
    pointer-events: none;
  }

  .quantity-container p {
    background: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    display: grid;
    padding: 0.2em;
    place-items: center;
    width: 2.5em;
  }
  
  .item-price {
    flex-basis: 10em;
    text-align: end;
  }

`;
