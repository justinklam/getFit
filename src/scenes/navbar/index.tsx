import { useState } from "react";

// Image assets
import Logo from "@/assets/logo-no-bg-sm.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {};

const Navbar = (props: Props) => {
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
                <p>Home</p>
                <p>Benefits</p>
                <p>Classes</p>
                <p>Contact Us</p>
              </div>

              {/* Sign-In */}
              <div>
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
