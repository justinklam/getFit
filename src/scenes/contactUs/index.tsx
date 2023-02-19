import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

// Image assets
import ContactUsGraphic from "@/assets/contactUs.jpeg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div></motion.div>
    </section>
  );
};

export default ContactUs;
