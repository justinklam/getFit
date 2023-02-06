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
  return <div>Home</div>;
};

export default Home;
