import styled from 'styled-components';

export const Container = styled.main`
  .main__list {
   display: flex;
   flex-direction: column;
   align-items: center;
   list-style: none;
   padding: 20px 0;
  }

  .main__item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

 .main__item-title {
    text-align: center;
    font-size: 30px;
    line-height: 35px;
    margin: 40px 0 20px;
  }

  .main__item-price {
   font-size: 20px;
   margin-top: 10px;
  }

  .main__item-link {
    padding-top: 10px;
    font-size: 20px;
  }

  .main__paginate-buttons {
   padding-bottom: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 20px;
  }

  .main__paginate-info {
    font-size: 20px;
  }

  .main__paginate-button {
   background-color: transparent;
   color: navy;
   padding: 20px;
   font-size: 20px;
   cursor: pointer;
   border: 1px solid navy;
  }

  .main__paginate-button:hover {
     background-color: rgba(177, 159, 235, 1);
  }

  @media screen and (max-width: 779px) {

    .main__item-title {
      font-size: 20px;
      line-height: 25px;
      margin: 20px 0 10px;
   }

    .main__item-image {
      width: 500px;
    }

   .main__item-price {
    font-size: 15px;
   }

    .main__item-link {
      font-size: 15px;
    }

  }

  @media screen and (min-width: 361px) and (max-width: 629px) {       
    .main__item-image {
      width: 300px;
    }
  }

   @media screen and (min-width: 320px) and (max-width: 361px) {
       .main__item-image {
         width: 200px;
        }
    }

`;