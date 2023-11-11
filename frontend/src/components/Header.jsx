import { useState } from "react";
import { Wrapper } from "./Components";

export default function Header() {
  const [isHamOpen, setIsHamOpen] = useState(false);

  return (
    <header className="lg:px-[160px] px-2 py-2 sm:py-0 md:px-[40px] sm:px-[10px] bg-default-black relative z-50 h-[80px] md:h-[100px] bg-[#FBFBEC] flex flex-col">
      <div className="flex flex-col justify-center">
        <div className="flex justify-between w-full">
          <h1 className="md:text-[70px] sm:text-[60px] text-[45px] whitespace-nowrap my-auto text-[#07391E] font-sans tracking-[-0.01em]">
            ECO SYNERGY
          </h1>
          <div className="my-auto whitespace-nowrap hidden xl:flex">
            <Button name="Мапа" link="#" />
            <Button name="Облік" link="#" />
            <Button name="Статті" link="#" />
            <a
              href="#"
              className="bg-[#2DA831] hover:bg-[#73e677]  text-[#07391E] text-center rounded-[30px] h-[35px] text-[24px] px-3 ml-[25px] xl:ml-[30px]"
            >
              Login/Sign Up
            </a>
          </div>
          <div className="xl:hidden flex my-auto cursor-pointer">
            <div
              onClick={() => {
                setIsHamOpen(!isHamOpen);
              }}
            >
              <Hamburger />
            </div>
            {isHamOpen && (
              <ul className="z-100 absolute bg-[#FBFBEC] p-3 top-[80px] sm:top-[100px] lg:right-[80px] right-[1px]">
                <Li text="Мапа" />
                <Li text="Облік" />
                <Li text="Статті" />
                <div className="mb-6"></div>
                <a
                  href="#"
                  className="bg-[#2DA831] hover:bg-[#73e677] transition-all text-[#07391E] text-center text-[24px] px-10 py-3"
                >
                  Login/Sign Up
                </a>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

const Li = (props) => {
  return (
    <li className="border-b-2 border-black mb-3 text-[24px] bg-[#64C8CF] hover:bg-[#74f6ff] transition-all text-[#214F52] px-10 py-2 text-center">
      {props.text}
    </li>
  );
};

const Button = (props) => {
  return (
    <a
      href={props.link}
      className="bg-[#64C8CF] hover:bg-[#74f6ff] transition-all md:w-[80px] lg:w-[120px] text-[25px] px-2 lg:px-3 h-[35px] text-[#214F52] text-center rounded-[30px] lg:ml-[30px]"
    >
      {props.name}
    </a>
  );
};

const Hamburger = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="sm:w-20 sm:h-20 w-14 h-14"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
