import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin: 26px auto 0;

  > div {
    position: relative;

    > span {
      position: absolute;
      font-size: 18px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0em;
      color: ${globalColor.colorBlack};
      top: 14px;
      left: 18px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: end;

  width: 136px;
  height: 48px;
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

  &:disabled {
    background-color: ${globalColor.colorLabel};
    cursor: not-allowed;
  }
`;

export const TitleSelect = styled.h3`
  color: ${globalColor.colorLabel};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  position: absolute;
  top: -26px;
  left: 0;
`;

export const InputLabel = styled.label`
  color: ${globalColor.colorLabel};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  position: absolute;
  top: -26px;
  left: 0;
`;

export const Holder = styled.div`
  display: flex;
  position: relative;

  > input {
    width: 160px;
    height: 48px;
    font-family: inherit;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
    background: ${globalColor.colorInput};
    color: ${globalColor.colorBlack};
    align-items: center;
    flex-shrink: 0;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  > span {
    position: absolute;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    color: ${globalColor.colorBlack};

    &:first-of-type {
      top: 14px;
      left: 24px;
    }

    &:last-of-type {
      top: 14px;
      right: 114px;
    }
  }
`;

export const Input1 = styled.input`
  padding: 14px 8px 14px 74px;
  border-radius: 14px 0px 0px 14px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
`;

export const Input2 = styled.input`
  padding: 14px 8px 14px 54px;
  border-radius: 0px 14px 14px 0px;
  border: none;
`;

export const carStyles = {
  singleValue: (styles) => ({
    ...styles,
    color: `${globalColor.colorBlack}`,
  }),

  control: (styles, { isSelected }) => ({
    ...styles,
    display: 'flex',
    color: isSelected
      ? `${globalColor.colorBlack}`
      : `${globalColor.colorBlack}33`,
    backgroundColor: '#F7F7FB',
    width: '224px',
    borderRadius: '14px',
    padding: '14px 18px',
    lineHeight: '1.11',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    outline: 'none',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',

    ':hover': {
      border: `1px solid ${globalColor.colorAccent}`,
    },

    ':active': {
      border: `1px solid ${globalColor.colorAccent}`,
    },

    ':focus': {
      outline: 'none',
      border: `1px solid ${globalColor.colorAccent}`,
    },
  }),

  option: (styles, state) => ({
    ...styles,
    color: state.isSelected
      ? `${globalColor.colorAccent}`
      : 'rgba(18, 20, 23, 0.20)',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '500',
    fontSize: '16px',
    cursor: 'pointer',
    lineHeight: '20px',
    backgroundColor: 'none',

    ':hover': {
      color: `${globalColor.colorAccent}`,
    },

    ':active': {
      color: `${globalColor.colorAccent}`,
      backgroundColor: `${globalColor.colorLabel}`,
    },

    ':focus': {
      outline: 'none',
      color: ` ${globalColor.colorAccent}`,
    },
  }),

  menu: (styles) => ({
    ...styles,

    top: '44x',
    backgroundColor: '#fff',
    padding: '14px 8px 14px 18px',
    borderRadius: '14px',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    boxShadow: 'px 4px 36px 0px rgba(0, 0, 0, 0.02)',
  }),

  menuList: (provided) => ({
    ...provided,

    boxSizing: 'content-box',
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '110px',
      position: 'relative',
      right: '-4px',
      top: 0,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      background: '#1214170D',
    },
    '&::-webkit-scrollbar-track': {
      background: '#fff',
    },
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  clearIndicator: (provided) => ({
    ...provided,
    padding: 0,
    cursor: 'pointer',
  }),

  valueContainer: (styles) => ({
    ...styles,
    padding: '0px',
    margin: '0px',
  }),

  input: (styles) => ({
    ...styles,
    padding: '0px',
    margin: '0px',
  }),

  dropdownIndicator: (styles, state) => ({
    ...styles,
    padding: 0,
    color: `${globalColor.colorBlack}`,
    transition: 'all .3s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),

  placeholder: (styles) => ({
    ...styles,
    color: `${globalColor.colorBlack}`,
  }),
};

export const priceStyles = {
  singleValue: (styles) => ({
    ...styles,
    color: `${globalColor.colorBlack}`,
    position: 'absolute',
    left: '32px',
  }),

  control: (styles, { isSelected }) => ({
    ...styles,
    display: 'flex',
    color: isSelected
      ? `${globalColor.colorBlack}`
      : `${globalColor.colorBlack}33`,
    backgroundColor: '#F7F7FB',
    width: '145px',
    borderRadius: '14px',
    padding: '14px 18px',
    lineHeight: '1.11',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    outline: 'none',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',

    ':hover': {
      border: `1px solid ${globalColor.colorAccent}`,
    },

    ':active': {
      border: `1px solid ${globalColor.colorAccent}`,
    },

    ':focus': {
      outline: 'none',
      border: `1px solid ${globalColor.colorAccent}`,
    },
  }),

  option: (styles, state) => ({
    ...styles,
    color: state.isSelected
      ? `${globalColor.colorAccent}`
      : 'rgba(18, 20, 23, 0.20)',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '500',
    fontSize: '16px',
    cursor: 'pointer',
    lineHeight: '20px',
    backgroundColor: 'none',

    ':hover': {
      color: `${globalColor.colorAccent}`,
    },

    ':active': {
      color: `${globalColor.colorAccent}`,
      backgroundColor: `${globalColor.colorLabel}`,
    },

    ':focus': {
      outline: 'none',
      color: ` ${globalColor.colorAccent}`,
    },
  }),

  menu: (styles) => ({
    ...styles,

    top: '44x',
    backgroundColor: '#fff',
    padding: '14px 8px 14px 18px',
    borderRadius: '14px',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    boxShadow: 'px 4px 36px 0px rgba(0, 0, 0, 0.02)',
  }),

  menuList: (provided) => ({
    ...provided,

    boxSizing: 'content-box',
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '110px',
      position: 'relative',
      right: '-4px',
      top: 0,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      background: '#1214170D',
    },
    '&::-webkit-scrollbar-track': {
      background: '#fff',
    },
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  clearIndicator: (provided) => ({
    ...provided,
    padding: 0,
    cursor: 'pointer',
  }),

  valueContainer: (styles) => ({
    ...styles,
    padding: '0px',
    position: 'relative',
    margin: '0px',
  }),

  input: (styles) => ({
    ...styles,
    padding: '0px',
    margin: '0px',
  }),

  dropdownIndicator: (styles, state) => ({
    ...styles,
    padding: 0,
    color: `${globalColor.colorBlack}`,
    transition: 'all .3s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),
};
