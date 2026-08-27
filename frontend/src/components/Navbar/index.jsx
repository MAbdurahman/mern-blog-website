import {StyledHeader, StyledHeaderNavbarContainer, StyledTopNavigation} from '../../styles/Navbar.styled.jsx';

export default function Navbar() {

   return (
      <StyledHeader>
         <StyledHeaderNavbarContainer>
            <StyledTopNavigation>
               <h4 style={{ color: 'white' }}>Blog</h4>
            </StyledTopNavigation>
         </StyledHeaderNavbarContainer>
      </StyledHeader>

   );
}