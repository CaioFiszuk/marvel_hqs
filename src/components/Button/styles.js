import styled from 'styled-components';

export const Container = styled.button`
        background-color: navy;
        color: yellow;
        border: none;
        border-radius: 20px;
        padding: 20px;
        font-size: 20px;
        cursor: pointer;

        &:hover {
          background-color: rgb(29, 29, 221);
        }

        > a {
          text-decoration: none;
          color: yellow;
        }


    @media screen and (min-width: 320px) and (max-width: 513px) {
       padding: 10px;
       font-size: 15px; 
    }

`;