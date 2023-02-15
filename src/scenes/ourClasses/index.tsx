import { SelectedPage } from "@/shared/types";

// Image assets
import classes1 from "@/assets/classes-1.jpeg";
import classes2 from "@/assets/classes-2.jpeg";
import classes3 from "@/assets/classes-3.jpeg";
import classes4 from "@/assets/classes-4.jpeg";
import classes5 from "@/assets/classes-5.jpeg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return <div>OurClasses</div>;
};

export default OurClasses;
