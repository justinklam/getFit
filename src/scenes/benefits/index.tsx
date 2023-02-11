import { SelectedPage } from "@/shared/types";
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
      ></motion.div>
    </section>
  );
};

export default Benefits;
