import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    main {
        min-height: 80vh;
    }

    h3{
        padding:1rem 0;
    }
    h1{
      font-size:1.8rem;
      padding:1rem 0;
    }
    h2{
      font-size:1.4rem;
      padding:0.5rem 0;
    }
    .rating span {
        margin: 1px
}

`

export default GlobalStyles;