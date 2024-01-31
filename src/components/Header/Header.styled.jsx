import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { globalColor } from '../../styles/root';

export const HeaderContainer = styled.header`
  background-color: ${globalColor.colorBlack};
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: 80px;
  z-index: 200;
`;

export const Navigation = styled.div`
  max-width: 1144px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;

  justify-content: space-between;

  > nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: ${globalColor.colorLabel};
  font-weight: 500;
  font-size: 20px;
  position: relative;
  transition: 3ms color ease;

  &:hover {
    color: ${globalColor.colorAccent};
  }

  &.active {
    color: ${globalColor.colorHeartBorder};
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      left: 0px;
      top: 28px;
      background-color: ${globalColor.colorAccent};
      border-radius: 2px;
    }
  }

  &:nth-child(2) {
    margin-left: 60px;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: auto;
  display: block;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: auto;
`;

export const NavListItem = styled.li`
  display: block;

  font-weight: 500;
  font-size: 16px;
  position: relative;

  > a {
    text-decoration: none;
    color: ${globalColor.colorLabel};
    transition: 3ms color ease;

    &:hover {
      color: ${globalColor.colorAccent};
    }
  }
`;
