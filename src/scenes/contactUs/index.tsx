import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

// Image assets
import ContactUsGraphic from "@/assets/contactUs.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyle = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

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
              // action={`${import.meta.env.VITE_FORM_EMAIL}`}
              action="https://formsubmit.co/91f90018781cf6352c7ab7a4e6e66b99"
            >
              {/* Name */}
              <input
                className={inputStyle}
                type="text"
                placeholder="NAME"
                // saves the input into the name property in react-hook-form
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {/* Error - Name */}
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}

              {/* Email */}
              <input
                className={inputStyle}
                type="text"
                placeholder="EMAIL"
                // saves the input into the email property in react-hook-form
                {...register("email", {
                  // required: true,
                  // reg-ex to check if it's a valid email
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {/* Error - Email */}
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {/* {errors.email.type === "required" && "This field is required"} */}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}

              {/* Message */}
              <textarea
                className={inputStyle}
                rows={4}
                cols={5}
                placeholder="MESSAGE"
                // saves the input into the name property in react-hook-form
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {/* Error - Message */}
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          {/* Contact Us Image & Gym Banner*/}
          <motion.div
            className="basis 2/5 relative mt-16 md:mt-0"
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
            {/* Gym Banner */}
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-logotext"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
