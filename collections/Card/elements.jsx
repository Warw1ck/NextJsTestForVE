// Styled elements for the Card go here
import styled from "styled-components";
import { theme } from "../../styles/theme";

const blueColor = theme.main

export const CardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  height: 16%;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: box-shadow 0.3s ease; /* Add transition for smooth effect */

  &:hover {
    box-shadow: 0 0 0 2px ${blueColor}; /* Solid blue box shadow when hovering */
    h3 {
      color: ${blueColor}; /* Set h3 text color to blue */
      text-decoration: underline; /* Add underline to h3 text */
    }
  }
`;

export const StyledCardTextContainer = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  display: flex;
  max-width: 1920px;
  width: 100%;
  height: auto;
  flex-direction: column;
  margin-left: 2rem;
  margin-right: auto;
  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
`;
