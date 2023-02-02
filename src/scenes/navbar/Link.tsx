import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
};

const Link = ({ page }: Props) => {
  // regEx replaces all empty spaces
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <AnchorLink href={`#${lowerCasePage}`} onClick={}>
      {page}
    </AnchorLink>
  );
};

export default Link;
