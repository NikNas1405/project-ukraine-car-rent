import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 541px;
  min-height: 752px;
  max-height: 800px;
  padding: 40px;
  border-radius: 24px;
  background-color: #fff;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageHolder = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 40px;
  margin-bottom: 14px;
  height: 248px;
  width: 461px;

  > img {
    object-fit: cover;
  }
`;

export const TitleHolder = styled.div`
  margin-bottom: 8px;

  > span {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
  }

  > span:nth-child(2) {
    color: #3470ff;
  }
`;

export const MainInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  gap: 6px;
  margin-bottom: 14px;
  width: 400px;

  > li {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  > li:last-child {
    border-right: none;
    padding-right: 0;
  }
`;

export const Description = styled.p`
  color: #121417;
  line-height: 1.43;
  margin-bottom: 24px;
`;

export const DescribeTitle = styled.h3`
  color: #121417;
  font-weight: 500;
  line-height: 1.42;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const AccessoriesInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  gap: 4px 6px;
  margin-bottom: 24px;

  > li {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  > li:last-child {
    border-right: none;
    padding-right: 0;
  }
`;

export const RentalConditions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;

  > li {
    box-sizing: border-box;
    padding: 7px 14px;
    border-radius: 35px;
    background: #f9f9f9;
    height: 32px;
    min-width: 90px;
    color: #363535;
    font-family: inherit;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.24px;

    > span {
      color: #3470ff;
      font-weight: 600;
    }
  }
`;

export const RentalButton = styled.a`
  width: 168px;
  height: 44px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  padding: 12px;
  border-radius: 12px;
  background: #3470ff;
  text-decoration: none;
  transition: background 0.3s ease-in-out;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
