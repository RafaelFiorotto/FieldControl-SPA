import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body{
    background: #22272D;
}

body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
}

html, body, #root {
    height: 100vh;
    width: 100vw;
    
    display: flex;
}`
;
