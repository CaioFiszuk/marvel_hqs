import styled from 'styled-components';

export const Container = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 30px 0;

    .error-page__sign {
     width: 300px;
     height: 300px;
     }

     .error-page__button {
        background-color: navy;
        color: yellow;
        border: none;
        border-radius: 20px;
        padding: 20px;
        font-size: 20px;
        text-decoration: none;
        cursor: pointer;
     }

     .error-page__button: hover {
        background-color: rgb(29, 29, 221);
     }
`;