import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

// Components
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses";

// Image assets
import classes1 from "@/assets/classes-1.jpeg";
import classes2 from "@/assets/classes-2.jpeg";
import classes3 from "@/assets/classes-3.jpeg";
import classes4 from "@/assets/classes-4.jpeg";
import classes5 from "@/assets/classes-5.jpeg";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check to see if we're at the top of the page
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        // SelectedPage is Home so that it's highlighted
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    // eventListener added to the window
    window.addEventListener("scroll", handleScroll);
    // return for when component unMounts
    // remove eventListener incase of memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20 scrollbar scrollbar-track-primary-100/20 scrollbar-thumb-secondary-500/80">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
