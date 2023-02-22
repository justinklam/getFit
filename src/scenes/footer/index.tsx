import Logo from "@/assets/logo-no-bg-sm.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-10">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-10 basis-1/2 md:mt-0">
          <img className="h-[200px]" src={Logo} alt="logo" />
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

        {/* Links */}
        <div className="mt-10 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Link1</p>
          <p className="my-5">Link2</p>
          <p className="my-5">Link3</p>
        </div>

        {/* Contact */}
        <div className="mt-10 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p>(416)-555-0100</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
