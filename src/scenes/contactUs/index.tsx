import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

// Image assets
import ContactUsGraphic from "@/assets/contactUs.jpeg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  return <div>ContactUs</div>;
};

export default ContactUs;
