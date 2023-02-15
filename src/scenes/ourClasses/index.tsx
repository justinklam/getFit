import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import { motion } from "framer-motion";

// Image assets
import classes1 from "@/assets/classes-1.jpeg";
import classes2 from "@/assets/classes-2.jpeg";
import classes3 from "@/assets/classes-3.jpeg";
import classes4 from "@/assets/classes-4.jpeg";
import classes5 from "@/assets/classes-5.jpeg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes = [
  {
    name: "Yoga",
    description:
      "Connect mind, body, and spirit with our yoga classes led by expert instructors. Suitable for all levels. Our classes focus on strength, flexibility, stress reduction, and mindfulness in a tranquil studio. Join us and experience the transformative power of yoga.",
  },
  {
    name: "HIIT & Cardio",
    description:
      "Transform your body and get in shape with our high-intensity interval training (HIIT) classes. Our expert trainers will guide you through a series of heart-pumping exercises designed to maximize fat burn and increase endurance. With our supportive community, you'll be motivated to challenge yourself and exceed your fitness goals. ",
  },
  {
    name: "Bouldering",
    description:
      "Experience the thrill of bouldering with our expert lessons in a safe and fun environment. Learn proper techniques and safety measures, and challenge yourself with our state-of-the-art wall and variety of routes. Join us and become a skilled and confident climber.",
  },
  {
    name: "Weightlifting Classes",
    description:
      "Build muscle and increase strength with our weightlifting classes for all levels. Led by experienced trainers in a state-of-the-art facility, our focus on proper form and technique ensures effective workouts with minimal risk of injury. Join us to achieve your fitness goals.",
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
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
          {/* Description */}
          <div className="md:w-3/5">
            {/* Title */}
            <HText>Our Classes</HText>

            {/* Class Description */}
            <p className="py-5">
              Our gym is proud to offer a wide range of classes to suit every
              fitness level and interest. From high-intensity cardio to relaxing
              yoga, we've got something for everyone. Our expert instructors
              will guide you through each class, ensuring that you get the most
              out of your workout. Our classes are designed to challenge and
              inspire you, while keeping you motivated and engaged.{" "}
            </p>
          </div>
        </motion.div>

        {/* Class Image Slider */}
        <div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
