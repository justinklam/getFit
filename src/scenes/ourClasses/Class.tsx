type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  return <li className="in-line-block relative mx-5 h-[380px] w-[450px]"></li>;
};

export default Class;
