import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  padding: 20px 0;
  background: ${({ theme }) => theme.body};
`;
export const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  justify-content: space-between;
`;
export const ToogleTheme = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: -0.08em;
  padding-right: 20px;
  color: ${({ theme }) => theme.primaryColor};
`;
export const NavLogo = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: -0.08em;
  padding-left: 20px;
  color: ${({ theme }) => theme.primaryColor};
`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterTitle = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.primaryColor};
`;
export const ErrorWrapper = styled.div`
  max-width: 1440px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 24px;
  @media screen and (max-width: 1024px) {
    padding: 25px;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 30px;
  }
`;

export const Column1 = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-basis: 100%;
  }
`;

export const ErrorImg = styled.img`
  width: 100%;
  max-height: 447.4263916015625px;
  max-width: 539.2236938476562px;
  min-width: 350px;
  min-height: 350px;
  /* left: 77px;
top: 265px; */
  border-radius: 0px;
  @media screen and (max-width: 768px) {
    min-width: 100px;
    min-height: 350px;
  }
  @media screen and (max-width: 500px) {
    flex-basis: 100%;
    min-height: auto;
    width: 100%;
  }
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  flex-basis: 50%;
  padding: 70px;
  @media screen and (max-width: 1024px) {
    padding: 50px;
    padding-right: 20px;
  }
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
  @media screen and (max-width: 500px) {
    flex-basis: 100%;
    padding: 0;
  }
`;

export const ErrorTitle = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 700;
  font-size: 50px;
  line-height: 70px;
  padding-bottom: 40px;
  @media screen and (max-width: 1024px) {
    font-size: 40px;
    line-height: 60px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
  @media screen and (max-width: 500px) {
    padding-bottom: 20px;
  }
`;

export const ErrorDesc = styled.p`
  color: ${({ theme }) => theme.descColor};
  font-weight: 400;
  font-size: 18px;
  line-height: 35.45px;
  width: 400px;
  padding-bottom: 40px;
  @media screen and (max-width: 1024px) {
    width: 300px;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
    font-size: 12px;
    line-height: 20.45px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 12px;
    padding-bottom: 20px;
  }
`;

export const ErrorBtn = styled.button`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  background: ${({ theme }) => theme.body};
  align-self: flex-start;
  padding: 25px 35px;
  cursor: pointer;
  color: ${({ theme }) => theme.body};
  border: none;
  background-color: ${({ theme }) => theme.primaryColor};
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 500px) {
    padding: 15px 15px;
  }
`;
