import styled from "styled-components";
import {
  Button,
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
display:grid;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  padding: 4rem;
  @media (max-width: 1024px) {
    padding: 0;
    }
`;

export const StyledGetStartedBtn = styled((props) => (
  <Button {...props} variant="contained" color="main" />
))`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  font-size: 2rem;
  line-height: inherit;
  @media (max-width: 1024px) {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
  font-size: 1rem;
  @media (max-width: 1024px) {
    font-size: 0.875rem;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
  text-align: center;
  padding-bottom: 1rem;
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledCardsContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 3rem;
  max-width: 22rem;
  padding-bottom: 2rem;
  justify-content: end;
  padding-right: 9rem;
  padding-left: 3px;

  @media (max-width: 1024px) {
    padding-inline: 3rem;
    height: 25rem;
    gap: 1.5rem;

  }
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
display: flex;
justify-content:center;
align-items: center;
  // max-width: 31.03rem;
  // max-height: 10rem;
  position: relative;
  // width: 100%;
  // height: 100%;
  background: url("/img/background.png");
  background-position: 25% center;
  background-repeat: no-repeat;
  background-size: auto 100%; /* Adjust this line */

  padding-inline: 9rem;
  padding-right: 4rem;
  
  padding-bottom: 1rem;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    padding-inline: 6rem;
    max-width: 25rem
  }
  span {
    display: inline !important;
  }
`;
