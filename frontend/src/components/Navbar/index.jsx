import {StyledHeader, StyledHeaderNavbarContainer, StyledTopNavigation} from '../../styles/Navbar.styled.jsx';

export default function Navbar() {

   return (
      <StyledHeader>
         <StyledHeaderNavbarContainer>
            <StyledTopNavigation>
               <h3 style={{ color: 'white' }}>Logo</h3>
            </StyledTopNavigation>
            <StyledTopNavigation>
               <h3 style={{ textAlign: '-webkit-center', color: 'white'}}>Search</h3>
            </StyledTopNavigation>
         </StyledHeaderNavbarContainer>
      </StyledHeader>

   );
}