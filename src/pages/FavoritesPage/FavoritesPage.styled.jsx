import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { globalColor } from '../../styles/root';

export const StyledDiv = styled.div`
  padding-top: 80px;
`;

export const Nothing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;

  > p {
    font-size: 16px;
    line-height: 1.5;
    color: ${globalColor.colorBlack};
  }

  > div {
    width: 200px;
    height: 200px;
  }
`;

export const ButtonLink = styled(NavLink)`
  min-width: 100px;
  padding: 15px 20px;
  background-color: ${globalColor.colorAccent};
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;

  &:focus,
  &:hover {
    background: ${globalColor.colorAccent1};
  }
`;
