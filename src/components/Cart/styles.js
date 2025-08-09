import styled from 'styled-components';

export const Container = styled.section`
   padding: 20px 0;
   border: 1px solid black;
   display: flex;
   flex-direction: column;
   align-items: center;
   flex: 1;

   .cart__title {
     font-size: 30px;
     line-height: 35px;
     padding-bottom: 20px;
   }

   .cart__message {
      padding-bottom: 20px;
   }

   .cart__items {
     list-style: none;
   }

   .cart__item {
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 10px;
     padding-bottom: 20px;
    }

    .cart__item__image {
      width: 200px;
      height: 250px;
    }

    .cart__item__title {
      text-align: center;
    }

    .cart__total-price {
      font-size: 30px;
      padding: 30px 0 20px;
    }

    .cart__buttons {
      display: flex;
      gap: 40px;
    }

`;