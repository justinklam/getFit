import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";

// Image assets
import HomePageText from "@/assets/text-no-bg.png";
import HomePageGraphic from "@/assets/homePageGraphic.jpeg";
import Sponser1 from "@/assets/sponser-1.png";
import Sponser2 from "@/assets/sponser-2.png";
import Sponser3 from "@/assets/sponser-3.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    // anchor is set for anchor-link-scroll for navigation
    // media query - apply full above medium screen
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      Home
    </section>
  );
};

export default Home;
