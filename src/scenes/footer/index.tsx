import Logo from "@/assets/logo-no-bg-sm.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 pb-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Don't hesitate to reach out to us if you have any questions or
            concerns. We look forward to helping you on your journey to a
            healthier and happier life!
          </p>
          <p>
            ©{" "}
            <a
              className="text-primary-500"
              href="https://github.com/justinklam"
            >
              JKL
            </a>{" "}
            All Rights Reserved
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
