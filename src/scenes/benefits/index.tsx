import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import { motion } from "framer-motion";

// Image assets
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        // for highlighting navbar section
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div>
          <HText>A GYM FOR EVERYONE</HText>
          <p>
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
      </motion.div>
    </section>
  );
};

export default Benefits;
