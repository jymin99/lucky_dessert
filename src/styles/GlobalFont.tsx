import { createGlobalStyle } from "styled-components";
import chab from "../assets/fonts/chab.woff";

const GlobalFont=createGlobalStyle`
    @font-face {
        font-family: 'chab';
        src: local('chab'),url(${chab}) format('woff') ;
    }
`;
export default GlobalFont;