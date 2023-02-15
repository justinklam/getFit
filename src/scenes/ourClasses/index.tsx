import { SelectedPage } from "@/shared/types";
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

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div></motion.div>
    </section>
  );
};

export default OurClasses;
