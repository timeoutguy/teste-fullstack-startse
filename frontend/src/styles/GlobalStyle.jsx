import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, button, input{
        border: 0;
        background: none;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    .white-link{
      color: #fff;
      transition: color 0.6s;
      padding: 10px;

      &:hover{
        color: #aaa;
        text-decoration: none;
      }
    }

`
