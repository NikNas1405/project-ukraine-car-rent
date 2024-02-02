import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import hero from '../../assets/hero.jpg';

import { globalColor } from '../../styles/root';

export const Hero = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 300px 0;
  background-color: ${globalColor.colorInput};
  background-image: linear-gradient(
      180deg,
      rgba(25, 46, 52, 0.61) 5.73%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${hero}),
    linear-gradient(180deg, rgba(25, 46, 52, 0.61) 5.73%, rgba(0, 0, 0, 0) 100%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;

  > p {
    max-width: 600px;
    margin: 0 auto 48px;
    font-weight: 500;
    font-size: 24px;
    line-height: 1;
    letter-spacing: 0.02em;
    color: ${globalColor.colorHeartBorder};
  }
`;

export const HeroTitle = styled.h1`
  max-width: 496px;
  margin: 0 auto 48px;
  font-weight: 700;
  font-size: 56px;
  line-height: 1.07;
  letter-spacing: 0.02em;
  color: ${globalColor.colorInput};
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
  transition: 3ms ease background-color;

  &:focus,
  &:hover {
    background-color: ${globalColor.colorAccent1};
  }
`;

export const Description = styled.section`
  font-size: 16px;
  line-height: 1.5;
  color: ${globalColor.colorBlack};
  text-align: center;

  > h2 {
    font-size: 24px;
    color: ${globalColor.colorAccent1};
    margin-bottom: 20px;
  }

  > p {
    font-size: 18px;
    margin-bottom: 40px;
  }

  > ol {
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;

    > li {
      padding: 8px;

      border-radius: 12px;
      width: 400px;
      height: 80px;

      &:first-of-type {
        border: 1px solid ${globalColor.colorAccent1};
      }
      &:nth-of-type(2) {
        border: 1px solid ${globalColor.colorAccent1}80;
      }
      &:nth-of-type(3) {
        border: 1px solid ${globalColor.colorAccent1}60;
      }
      &:nth-of-type(4) {
        border: 1px solid ${globalColor.colorAccent1}40;
      }
    }
  }
`;
