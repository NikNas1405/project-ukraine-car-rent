import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from 'assets/sprite.svg';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Logo } from './new/Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <StyledLink to="/first">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          First
        </StyledLink>
        <StyledLink to="/second">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Second
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
