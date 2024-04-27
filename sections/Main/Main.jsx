import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledGetStartedBtn,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
  StyledCardsContainer,
} from "./elements";
import { Card } from "../../collections/Card/Card";

export const Main = ({ image, title, description, cards }) => {
  console.log(cards)
  return (
    <StyledContainer className="divWithBackground">
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledCTAContainer>
        <StyledImageContainer>
          <Image
            src={image.src}
            alt={image.alt}
            style={{ display: "inline" }}
            height={450}
            width={300}
          />
        </StyledImageContainer>
        <StyledCardsContainer>
          {cards.map((props) => {
            return <Card {...props} />;
          })}
        </StyledCardsContainer>
      </StyledCTAContainer>
    </StyledContainer>
  );
};
