import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Manjari:100,400,700&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: #16202c;
    line-height: 1;
    font-size: 100%;
    font-family: Manjari, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`
