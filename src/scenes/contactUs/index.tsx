import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

// Image assets
import ContactUsGraphic from "@/assets/contactUs.jpeg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
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
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            We're always here to answer any questions or concerns you may have
            about our gym. You can contact us by phone, email, or through our
            website. Our knowledgeable and friendly staff are happy to assist
            you with anything you need, from membership inquiries to class
            schedules.
          </p>
        </motion.div>

        {/* Form & Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            // triggers when 50% of viewport is in view
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 }, // starting position from top
              visible: { opacity: 1, y: 0 }, // end position from bot
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              // action={`${process.env.FORM_EMAIL}`}
            >
              <input
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="text"
                placeholder="NAME"
                // saves the input into the name property in react-hook-form
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
