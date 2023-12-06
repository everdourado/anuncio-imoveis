import { createGlobalStyle } from "styled-components"


export const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Newsreader:opsz@6..72&family=Open+Sans:wght@500&display=swap" rel="stylesheet');

* {
  margin: 0;
  padding: 0;
  font-family: Newsreader, Arial;
}

html {
  width: auto;
}

body {
  max-width: 100vw;
  height: 100ch;
  background-color: #e0e0e0;
}
`;