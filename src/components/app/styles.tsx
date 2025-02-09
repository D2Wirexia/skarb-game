import { createGlobalStyle } from 'styled-components'

import { Color } from '~/constants'

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-roboto: "Roboto";
    --font-kimberley: "Kimberley";
    --font-alegreya: "Alegreya";
    --font-katibeh: "Katibeh";
    --transition: all 0.3s easy-in-out;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    line-height: inherit;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  body {
    background: ${Color.LostInSadness};
      font-family: var(--font-alegreya) !important;
  }

  button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    line-height: inherit;

    &:focus {
      outline: none;
      border: none;
    }
  }

  a {
    text-decoration: none;

    &:focus {
      outline: none;
      border: none;
    }
  }

  input {
    outline: none;
    background: none;
    border: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
  }

  textarea:focus, input:focus {
    outline: none;
  }

  textarea {
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: red;
      cursor: default;
    }

    &::-webkit-scrollbar-thumb:active {
      background-color: red;
    }

    &::-webkit-scrollbar-track {
      border-radius: 4px;
      background-color: red;
      cursor: default;
    }
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    src: url('../../../assets/fonts/Roboto/Roboto-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: url('../../../assets/fonts/Roboto/Roboto-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    src: url('../../../assets/fonts/Roboto/Roboto-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 900;
    src: url('../../../assets/fonts/Roboto/Roboto-Black.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Kimberley';
    font-weight: 900;
    src: url('../../../assets/fonts/Kimberley/Kimberley-Black.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Alegreya';
      font-weight: 400;
      src: url('../../../assets/fonts/Alegreya/Alegreya-Regular.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Alegreya';
      font-weight: 500;
      src: url('../../../assets/fonts/Alegreya/Alegreya-Medium.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Alegreya';
      font-weight: 600;
      src: url('../../../assets/fonts/Alegreya/Alegreya-SemiBold.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Alegreya';
      font-weight: 700;
      src: url('../../../assets/fonts/Alegreya/Alegreya-Bold.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Katibeh';
      font-weight: 400;
      src: url('../../../assets/fonts/Katibeh/Katibeh-Regular.ttf') format('truetype');
  }
`
