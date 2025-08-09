import styled from 'styled-components';

export const Container = styled.section`
 .info-page {
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px 0;
   gap: 20px;
 }

 .info-page__title {
    text-align: center;
    font-size: 30px;
    line-height: 35px;
 }

 .info-page__description {
   font-size: 20px;
   line-height: 25px;
 }

 .info-page__characters-list {
   list-style: none;
 }

 .info-page__characters-list__title {
   text-align: center;
   padding-bottom: 5px;
 }

 .info-page__characters-item {
    text-align: center;
 }

 .info-page__price {
   font-size: 30px;
   line-height: 35px;
 }


   @media screen and (max-width: 779px) {

    .info-page__title {
      font-size: 20px;
      line-height: 25px;
      margin: 20px 0 10px;
   }

    .info-page__image {
      width: 500px;
    }

  }

  @media screen and (min-width: 361px) and (max-width: 629px) {       
    .info-page__image {
      width: 300px;
    }
  }

   @media screen and (min-width: 320px) and (max-width: 361px) {
       .info-page__image {
         width: 200px;
        }
    }
`;