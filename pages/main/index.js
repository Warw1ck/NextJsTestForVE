
import { Main } from "../../sections/Main/Main";
import { theme } from "../../styles/theme";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const mainProps = {
  image: { src: "/img/video.png", alt: "" },
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  ctaText: "Start",
  cards: [
    {
      title: "Brief",
      description:
        "Complete brief writing or simple guidance on what to include, we've got you covered.",
      color: theme.grayF0,
      leftSpace: "90%",
      innerTitleStartIndex: 9,
      innerTitleEndIndex: 41,
      icon: {path: '/icons/face-crazy.svg', name: 'Crazy Emoji'},

    },
    {
      title: "Search",
      description:
        "In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting.",
      color: theme.grayEA,
      leftSpace: "95%",
      innerTitleStartIndex: 32,
      innerTitleEndIndex: 47,
      icon: {path: '/icons/face-grin-stars-regular.svg', name: 'Stars Emoji'},
    },

    {
      title: "Pitch",
      description:
        "Comprehensive pitch management, including comms, diary management and pitch hosting.",
      color: theme.grayE2,
      leftSpace: "100%",
      innerTitleStartIndex: 14,
      innerTitleEndIndex: 30,
      icon: {path: '/icons/face-grin-tears-regular.svg', name: 'Tears Emoji'},
    },
  ],
};

export default function MainContent() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        {/* <Hero {...heroProps} /> */}

        <Main {...mainProps} />

        {/** Other sections */}
      </div>
    </>
  );
}
