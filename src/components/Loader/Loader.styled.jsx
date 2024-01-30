import styled, { keyframes } from 'styled-components';

import { globalColor } from '../../styles/root';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const pegIt = keyframes`
    0% {
        transform: rotate(0deg);
    }
    16% {
        transform: rotate(75deg);
    }
    25% {
        transform: rotate(55deg);
    }
    30% {
        transform: rotate(90deg);
    }
    36% {
        transform: rotate(170deg);
    }
    42% {
        transform: rotate(150deg);
    }
    50% {
        transform: rotate(227deg);
    }
    100% {
        transform: rotate(0deg);
    }
`;

export const LoaderWrapper = styled.div`
  &.loader-off {
    display: none !important;
  }

  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${globalColor.colorWhite};
  z-index: 15000;
  overflow: hidden;
`;

export const LoaderStyled = styled.div`
  width: 150px;
  height: 150px;
  border: 1px ${globalColor.colorBlack} solid;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -75px 0 0 -75px;
  border-radius: 50%;

  &.custom-loader {
    border: medium none;
    left: 0;
    margin: 0 auto;
    right: 0;
  }
`;

export const LoadingText = styled.div`
  font-size: 10px;
  position: absolute;
  width: 100%;
  text-align: center;
  line-height: 14px;
  left: 0;
  top: 50%;
  margin-top: 20px;
  color: ${globalColor.colorBlack};
  font-weight: 700;
  text-transform: uppercase;
`;

export const LoaderCircle = styled.div`
  width: 138px;
  height: 138px;
  left: 5px;
  top: 5px;
  border: 1px ${globalColor.colorBlack} solid;
  border-radius: 50%;
  position: absolute;
  border-right-color: transparent;
  animation: ${spin} 3s linear infinite;

  > div {
    width: 126px;
    height: 126px;
    left: 5px;
    top: 5px;
    border: 1px transparent solid;
    border-radius: 50%;
    position: absolute;
    border-right-color: ${globalColor.colorAccent};
    -webkit-animation: ${spin} 5s linear infinite;
    animation: ${spin} 5s linear infinite;
  }
`;

export const Line = styled.div`
  width: 10px;
  height: 2px;
  background: ${globalColor.colorBlack};
  position: absolute;

  &:first-of-type {
    left: 16px;
    top: 50%;
    margin-top: -1px;
  }

  &:nth-of-type(2) {
    transform: rotate(45deg);
    left: 33px;
    top: 33px;
  }

  &:nth-of-type(3) {
    top: 16px;
    left: 50%;
    width: 2px;
    height: 10px;
  }

  &:nth-of-type(4) {
    transform: rotate(135deg);
    right: 33px;
    top: 33px;
  }

  &:nth-of-type(5) {
    right: 16px;
    top: 50%;
    margin-top: -1px;
  }

  &:nth-of-type(6) {
    transform: rotate(45deg);
    right: 33px;
    bottom: 33px;
    background: ${globalColor.colorAccent};
  }
`;

export const Needle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px ${globalColor.colorBlack} solid;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -8px 0 0 -8px;
  z-index: 1;

  &:before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 3.5px 50px 3.5px 0;
    border-color: transparent ${globalColor.colorAccent} transparent transparent;
    position: absolute;
    right: 50%;
    top: 50%;
    margin: -3.5px 0 0 0;
    border-radius: 0 50% 50% 0;
  }

  animation: ${pegIt} 3s infinite ease-in-out;
`;
