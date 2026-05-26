
import {NavLink} from 'react-router-dom';
import {Squash} from 'hamburger-react';

import styled from 'styled-components';


export const StyledHeader = styled.header`
   position: fixed;
   top: 0;
   left: 0;
   z-index: 10;
   min-height: 80px;
   width: 100vw;
   margin: 0;
   color: var(--color-neutral-300);
   background-color: var(--color-blue-01-700);

`;

export const StyledHeaderNavbarContainer = styled.div`
   position: relative;
   z-index: 10;
   width: 100%;
   margin-left: auto;
   margin-right: auto;
   padding-right: 16px;
   padding-left: 16px;
   

   @media screen and (min-width: 576px) {
      max-width: 544px;
   }
   @media screen and (min-width: 768px) {
      max-width: 720px;
   }
   @media screen and (min-width: 992px) {
      max-width: 960px;
   }
   @media screen and (min-width: 1200px) {
      max-width: 1144px;
   }
   @media screen and (min-width: 1400px) {
      max-width: 1320px;
   }

`;

export const StyledTopNavigation = styled.nav`
   position: relative;
   width: 100%;
   height: 70px;
   background: #000;
   color: #fff;
   display: flex;
   align-items: center;
   font-size: 18px;
   justify-content: space-between;
   padding: 0 20px;
   
`;