import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { globalColor } from '../../styles/root';

export const FooterContainer = styled.footer`
  background-color: ${globalColor.colorBlack};
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 150px;
  z-index: 200;
`;

export const FooterContent = styled.div`
  max-width: 1144px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  justify-content: center;

  > span {
    color: ${globalColor.colorLabel};
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: ${globalColor.colorLabel};
  position: relative;
  transition: 3ms color ease;

  &:hover {
    color: ${globalColor.colorAccent};
  }
`;
