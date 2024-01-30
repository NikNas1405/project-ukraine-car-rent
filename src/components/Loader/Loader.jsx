
import {
  Line,
  LoaderCircle,
  LoaderStyled,
  LoaderWrapper,
  LoadingText,
  Needle,
} from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderStyled>
        <Line></Line>
        <Line></Line>
        <Line></Line>
        <Line></Line>
        <Line></Line>
        <Line></Line>
        <LoaderCircle>
          <div></div>
        </LoaderCircle>
        <Needle></Needle>
        <LoadingText>Rental Car</LoadingText>
      </LoaderStyled>
    </LoaderWrapper>
  );
};

export default Loader;