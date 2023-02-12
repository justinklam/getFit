import { BenefitType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import { motion } from "framer-motion";

// Components
import Benefit from "./Benefit";

// Image assets
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

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
        <div className="md:my-5 md:w-3/5">
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
            Come and experience the perfect blend of physical challenge,
            mindfulness, and strength-building at our gym!
          </p>
        </div>

        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
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
      </motion.div>
    </section>
  );
};

export default Benefits;
