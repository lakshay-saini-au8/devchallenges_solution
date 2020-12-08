import React from "react";
import errorImg from "../../images/Scarecrow.png";
import {
  ErrorContainer,
  ErrorWrapper,
  Column1,
  ErrorImg,
  Column2,
  ErrorBtn,
  ErrorDesc,
  ErrorTitle,
  NavLogo,
  NavWrapper,
  FooterTitle,
  FooterWrapper,
  ToogleTheme,
} from "./ErrorElements";
const Error = ({ theme, toogleTheme }) => {
  return (
    <>
      <ErrorContainer>
        <NavWrapper>
          <NavLogo>404 NOT FOUND</NavLogo>
          <ToogleTheme onClick={toogleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </ToogleTheme>
        </NavWrapper>
        <ErrorWrapper>
          <Column1>
            <ErrorImg src={errorImg} />
          </Column1>
          <Column2>
            <ErrorTitle>I have bad news for you</ErrorTitle>
            <ErrorDesc>
              The page you are looking for might be removed or is temporarily
              unavailable.
            </ErrorDesc>
            <ErrorBtn>BACK TO HOMEPAGE</ErrorBtn>
          </Column2>
        </ErrorWrapper>
        <FooterWrapper>
          <FooterTitle>Lakshay saini @ DevChallenges.io</FooterTitle>
        </FooterWrapper>
      </ErrorContainer>
    </>
  );
};

export default Error;
