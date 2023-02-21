import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

// Image assets
import HomePageText from "@/assets/text-no-bg.png";
// import HomePageGraphic from "@/assets/homePageGraphic-alt.png";
import HomePageGraphicAlt from "@/assets/homePageGraphic3-circle.png";
import Sponser1 from "@/assets/sponser-1.png";
import Sponser2 from "@/assets/sponser-2.png";
import Sponser3 from "@/assets/sponser-3.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  // media query - apply full above medium screen
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image & Main Header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        // responsive navBar area selection
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            // triggers when 50% of viewport is in view
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 }, // starting position
              visible: { opacity: 1, x: 0 }, // end position
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-logotext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>

            <p className="mt-8 text-sm md:text-start">
              A gym for everyone. Discover the ultimate fitness experience at
              our gym where bouldering, yoga, and weightlifting come together.
              Find the perfect balance of physical challenge, mindfulness, and
              strength-building at our unique gym!
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            // triggers when 50% of viewport is in view
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 }, // starting position
              visible: { opacity: 1, x: 0 }, // end position
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            {/* // anchor is set for anchor-link-scroll for navigation */}
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img
            className="h-1/3 w-2/3"
            src={HomePageGraphicAlt}
            alt="home-pageGraphic"
          />
        </div>
      </motion.div>

      {/* Sponsers & Partners */}
      {isAboveMediumScreens && (
        <div className="h-[290px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={Sponser1} alt="sponser-1" />
              <img src={Sponser2} alt="sponser-2" />
              <img src={Sponser3} alt="sponser-3" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
