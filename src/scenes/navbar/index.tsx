import { useState } from "react";

// Components
import Link from "./Link";

// Image assets
import Logo from "@/assets/logo-no-bg-sm.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} gap-15 w-full`}>
            {/* Left Side */}
            <img className="" src={Logo} alt="logo" />

            {/* Right Side */}
            <div className={`${flexBetween} w-full`}>
              {/* Links */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>

              {/* Sign-In */}
              <div className={`${flexBetween} gap-8`}>
                <p>Sign-In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
