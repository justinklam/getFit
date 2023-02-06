import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
      {/* Image & Main Header */}
      <div>
        {/* Main Header */}
        <div>
          {/* Headings */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>

            <p>
              A gym for everyone. Discover the ultimate fitness experience at
              our gym where bouldering, yoga, and weightlifting come together.
              Our bouldering wall offers challenges for all skill levels, our
              yoga studio provides peace and relaxation, and our weightlifting
              area is equipped with state-of-the-art equipment. Find the perfect
              balance of physical challenge, mindfulness, and strength-building
              at our unique gym!
            </p>
          </div>

          {/* Actions */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        {/* Image */}
        <div></div>
      </div>
    </section>
  );
};

export default Home;
