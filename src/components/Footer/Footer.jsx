import { FooterContainer, FooterContent, StyledLink } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <span>
          © 2024{' '}
          <StyledLink
            href="https://github.com/NikNas1405/project-ukraine-car-rent"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            NikNas™
          </StyledLink>{' '}
          All Rights Reserved.
        </span>
      </FooterContent>
    </FooterContainer>
  );
};
