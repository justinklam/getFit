import { BenefitType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import { motion } from "framer-motion";

// Components
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

// Image assets
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitsPageGraphic from "@/assets/benefits-no-bg.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Exceptional Facilities",
    description:
      "This gym offers a unique blend of physical activities for a well-rounded workout experience. The spacious facility boasts a dedicated bouldering area where climbers can test their strength and skills on challenging rock formations, while those seeking a more relaxed workout can attend yoga classes where they can stretch and strengthen their bodies in a peaceful and calming environment.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Different Classes For All Your Needs",
    description:
      "For those who are looking for a diverse range of workout options. The extensive class schedule features an array of offerings, from high-intensity interval training to relaxing yoga, ensuring that there is something for everyone. ",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert Trainers For All Levels",
    description:
      "For fitness enthusiasts or newcomers who are looking for personalized and expert guidance. The diverse team of trainers bring a wealth of knowledge, experience and passion to their work, and they are dedicated to helping each member achieve their fitness goals. Whether you're looking to build strength, improve flexibility, or train for a specific sport, you'll find a trainer who specializes in your area of interest. ",
  },
];

const container = {
  hidden: {},
  visible: {
    // all child components will be staggered
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    // added md:mt-20
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 md:mt-20">
      <motion.div
        // for highlighting navbar section
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
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
          <HText>A GYM FOR EVERYONE</HText>
          <p className="my-5 text-sm">
            Welcome to our one-of-a-kind gym where we offer a unique combination
            of bouldering, yoga, and weightlifting!
            <br></br>
            <br></br>
            Whether you're an experienced climber looking for new challenges or
            a beginner just starting out, our bouldering wall provides a fun and
            safe environment for climbers of all skill levels.
            <br></br>
            Our yoga studio offers a peaceful escape from the hustle and bustle
            of the gym, with a variety of classes taught by experienced
            instructors.
            <br></br>
            And for those looking to build strength, our weightlifting area is
            equipped with the latest equipment, allowing you to achieve your
            fitness goals with ease.
            <br></br>
            <br></br>
            Come and experience the perfect blend of physical challenge,
            mindfulness, and strength-building at our gym!
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphics & Description */}
        <div className="mt-10 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphics */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />

          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="mt-10 before:absolute before:-top-20 before:-left-20 before:z-[1]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  // triggers when 50% of viewport is in view
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 }, // starting position
                    visible: { opacity: 1, x: 0 }, // end position
                  }}
                >
                  <HText>
                    GET FIT WITH US{" "}
                    <span className="text-secondary-500">HERE</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              // triggers when 50% of viewport is in view
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 }, // starting position
                visible: { opacity: 1, x: 0 }, // end position
              }}
            >
              <p className="my-5">
                {" "}
                Get fit and feel great with us! Our gym offers a welcoming and
                supportive environment for all fitness levels. With
                state-of-the-art equipment, a variety of group fitness classes,
                and knowledgeable personal trainers, you'll have everything you
                need to reach your fitness goals.{" "}
              </p>
              <p className="mb-5">
                Whether you're just starting out or you're a seasoned athlete,
                our gym has something for everyone. Come join us and experience
                the difference that our community can make in your fitness
                journey. Sign up now and start transforming your life!"{" "}
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-16">
              <div className="before:content before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
