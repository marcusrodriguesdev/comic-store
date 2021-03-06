import styled from 'styled-components';

export const Container = styled.div`
  .cart-link {
    background: white;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: #2b2b2b;
    display: grid;
    font-size: 2em;
    height: 1.5em;
    place-items: center;
    position: fixed;
    right: 2em;
    top: 0.5em;
    width: 1.5em;
    z-index: 2;
  }

  .cart-link svg {
    animation: cart-animation 0.2s ease-in-out;
  }

.cart-link span {
    background: #888;
    border-radius: 50%;
    bottom: 0;
    color: white;
    display: grid;
    font-size: 0.4em;
    height: 1.7em;
    left: 100%;
    place-items: center;
    position: absolute;
    text-decoration: none;
    transform: translateX(-50%);
    width: 1.7em;
  }

@keyframes cart-animation {
  from {
    transform: scale(0.9);
  }

  to {
    transform: scale(1.1);
  }
}
`;
