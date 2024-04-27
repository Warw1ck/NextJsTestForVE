import {
  StyledSectionSubheading,
  StyledSectionParagraph,
  StyledSectionInnerHeading,
  StyledSectionHeadingCard,
} from "../../components/Typography/elements";
import { CardContainer, StyledCardTextContainer } from "./elements";

import Image from "next/image";

export function Card({
  title,
  description,
  color,
  leftSpace,
  innerTitleStartIndex,
  innerTitleEndIndex,
  icon,
}) {
  // Split the description into three parts: before the inner title, the inner title itself, and after the inner title
  const beforeInnerTitle = description.slice(0, innerTitleStartIndex);
  const innerTitle = description.slice(
    innerTitleStartIndex,
    innerTitleEndIndex
  );
  const afterInnerTitle = description.slice(innerTitleEndIndex);

  return (
    <CardContainer style={{ backgroundColor: color, width: leftSpace }}>
      <Image src={icon.path} alt={icon.name} width={70} height={70} />

      <StyledCardTextContainer>
        <StyledSectionHeadingCard>{title}</StyledSectionHeadingCard>

        <StyledSectionParagraph>
          {beforeInnerTitle} {/* Render the part before the inner title */}
          <StyledSectionInnerHeading>
            {innerTitle}
          </StyledSectionInnerHeading>{" "}
          {/* Render the inner title */}
          {afterInnerTitle} {/* Render the part after the inner title */}
        </StyledSectionParagraph>
      </StyledCardTextContainer>
    </CardContainer>
  );
}
