import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: navy;
  color: white;
  padding: 30px;
  width: 100%;

  .header__title {
    font-size: 60px;
    color: yellow;
    cursor: pointer;
  }

  .header__cart {
   width: 30px;
   height: 30px;
   cursor: pointer;
  }

  .header__cart:hover {
   color: gray;
  }


  @media (min-width: 513px) and (max-width: 779px) {
    .header__title {
      font-size: 40px;
    }
  }

  @media screen and (min-width: 361px) and (max-width: 513px) {
     .header__title {
      font-size: 30px;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 361px) {
     .header__title {
      font-size: 20px;
    }

    .header__cart {
     width: 20px;
     height: 20px;
    }
  }
`;