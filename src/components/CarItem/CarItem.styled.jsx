import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const CarItemStyled = styled.li`
  flex-basis: calc((100% - 29px));
  max-width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-basis: calc((100% - 3 * 29px) / 4);
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 14px;
  margin-bottom: 14px;
  height: 268px;
  display: flex;
  flex-direction: column;

  > img {
    object-fit: cover;
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const SvgStyled = styled.svg`
  fill: transparent;
  stroke: ${globalColor.colorWhite};
  width: 18px;
  height: 18px;
  transition: 3ms ease fill;
  transition: 3ms ease stroke;

  &.active {
    fill: ${globalColor.colorAccent};
    stroke: transparent;
  }
`;

export const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
  height: 72px;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  > p {
    color: ${globalColor.colorBlack};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
`;

// outline: 1px solid tomato;

export const TitleHolder = styled.div`
  > span {
    color: ${globalColor.colorBlack};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  > span:nth-child(2) {
    color: ${globalColor.colorAccent};
  }
`;

export const MainInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  gap: 6px 4px;

  > li {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  > li:last-child {
    border-right: none;
    padding-right: 0;
  }
`;

export const Button = styled.button`
  height: 44px;
  padding: 14px;
  background: ${globalColor.colorAccent};
  color: ${globalColor.colorWhite};
  border-radius: 12px;
  border: none;

  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${globalColor.colorAccent1};
  }
`;
