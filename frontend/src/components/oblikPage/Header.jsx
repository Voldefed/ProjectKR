import { useEffect, useRef, useState } from "react";

const HeaderOblik = (props) => {
  const SortButton = useRef(null);
  const AddButton = useRef(null);

  useEffect(() => {
    if (props.buttonSelected) {
      SortButton.current.classList.add("bg-[#DD672F]");
      SortButton.current.classList.remove("hover:bg-[#ffa074]");
      AddButton.current.classList.add("hover:bg-[#ffa074]");
      AddButton.current.classList.remove("bg-[#DD672F]");
    } else {
      SortButton.current.classList.remove("bg-[#DD672F]");
      SortButton.current.classList.add("hover:bg-[#ffa074]");
      AddButton.current.classList.remove("hover:bg-[#ffa074]");
      AddButton.current.classList.add("bg-[#DD672F]");
    }
  }, [props.buttonSelected]);

  return (
    <header className="w-full flex justify-center h-[200px] mt-[30px]">
      <div className="bg-[#EADAB4] rounded-[30px] max-w-[400px] w-full h-[70px] flex justify-between p-1">
        <button
          ref={SortButton}
          onClick={() => {
            props.setButtonSelected(true);
          }}
          className="bg-[#DD672F] text-white rounded-[30px] px-4 w-[180px] text-[24px]"
        >
          Сортую
        </button>
        <button
          ref={AddButton}
          onClick={() => {
            props.setButtonSelected(false);
          }}
          className="hover:bg-[#ffa074] text-white rounded-[30px] px-4 w-[180px] text-[24px]"
        >
          Додане
        </button>
      </div>
    </header>
  );
};

export default HeaderOblik;
