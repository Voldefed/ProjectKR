const Footer = () => {
  return (
    <footer className="bg-[#EADAB4] lg:px-[100px] xl:px-[200px] 2xl:px-[400px] flex flex-col justify-center py-5 flex-shrink-0">
      <ul className="flex md:justify-between justify-center flex-wrap flex-row">
        <Li text="Про нас" />
        <Li text="Допомога" />
        <Li text="Додаткова інформація" />
        <Li text="Звоторній звязок" />
      </ul>
    </footer>
  );
};

const Li = (props) => {
  return (
    <li className="text-black font-bold px-3 text-[20px] hover:underline cursor-pointer">
      {props.text}
    </li>
  );
};

export default Footer;
