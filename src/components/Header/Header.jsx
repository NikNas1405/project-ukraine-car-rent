import { HeaderContainer, Logo, NavLinkStyled } from './Header.styled';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

export const Header = () => {
  return (
    <Header>
      <HeaderContainer>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/catalog">All cars</NavLinkStyled>
          <NavLinkStyled to="/favorites">Favorites cars</NavLinkStyled>
        </nav>
      </HeaderContainer>
    </Header>
  );
};
