import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle` 
    :root {
        --light-grey: #707070;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    h1, h2, h3, h4 {
        line-height: 1.2;
    }
     body, h1, h2, h3, h4, p {
        margin: 0;
        color: var(--light-grey);
    }
`;
