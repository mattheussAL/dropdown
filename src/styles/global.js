import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;

   box-sizing: border-box;
  }

  .home, .reports, .products, .team {
    font-size: 3rem;

    height: 90vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

