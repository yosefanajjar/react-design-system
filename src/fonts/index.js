import { createGlobalStyle } from "styled-components";

import WorkSansMediumTTF from "./WorkSans-Medium.ttf";
import WorkSansBoldTTF from "./WorkSans-Bold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Work Sans';
        src: local('Work Sans'), local('WorkSans'),
        url(${WorkSansMediumTTF}) format('ttf'),
        url(${WorkSansMediumTTF}) format('ttf');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Work Sans';
        src: local('Work Sans'), local('WorkSans'),
        url(${WorkSansBoldTTF}) format('ttf'),
        url(${WorkSansBoldTTF}) format('ttf');
        font-weight: 700;
        font-style: normal;
    }
`;
