import {
  HeaderContainer,
  Navigation,
  StyledLink,
  Logo,
  NavList,
  NavListItem,
} from './Header.styled';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <nav>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">All cars</StyledLink>
          <StyledLink to="/favorites">Favorites cars</StyledLink>
        </nav>
        <NavList>
          <NavListItem>
            <a href="mailto:info@ukrainecarrent.com">info@ukrainecarrent.com</a>
          </NavListItem>
          <NavListItem>
            <a href="tel:+380730000000">+38 (073) 000-00-00</a>
          </NavListItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
};
