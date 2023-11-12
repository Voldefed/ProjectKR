import { useState } from "react";

const initialCounter = [0, 0, 0, 0];

const MainOblik = (props) => {
  const [plastic, setPlastic] = useState([0, 0, 0, 0]);
  const [paper, setPaper] = useState(initialCounter);
  const [glass, setGlass] = useState(initialCounter);
  const [metal, setMetal] = useState(initialCounter);
  const [organic, setOrganic] = useState(initialCounter);

  return (
    <>
      {props.buttonSelected ? (
        <main className="flex xl:mx-[100px] flex-wrap justify-center">
          <TrashCan
            text={"Пластик"}
            color={"#2DA831"}
            counters={plastic}
            setCounter={setPlastic}
          />
          <TrashCan
            text={"Папір"}
            color={"#EA9DAF"}
            counters={paper}
            setCounter={setPaper}
          />
          <TrashCan
            text={"Скло"}
            color={"#FAC75D"}
            counters={glass}
            setCounter={setGlass}
          />
          <TrashCan
            text={"Метал"}
            color={"#F1E588"}
            counters={metal}
            setCounter={setMetal}
          />
          <TrashCan
            text={"Органіка"}
            color={"#64C8CF"}
            counters={organic}
            setCounter={setOrganic}
          />
        </main>
      ) : (
        <main className="mx-[500px] flex justify-between">
          <div className="flex flex-col text-center">
            <h1>Plactic</h1>
            {plastic.map((p) => {
              return <div>{p}</div>;
            })}
          </div>
          <div className="flex flex-col text-center">
            <h1>Paper</h1>
            {paper.map((p) => {
              return <div>{p}</div>;
            })}
          </div>
          <div className="flex flex-col text-center">
            <h1>Glass</h1>
            {glass.map((p) => {
              return <div>{p}</div>;
            })}
          </div>
          <div className="flex flex-col text-center">
            <h1>Metal</h1>
            {metal.map((p) => {
              return <div>{p}</div>;
            })}
          </div>
          <div className="flex flex-col text-center">
            <h1>Organic</h1>
            {organic.map((p) => {
              return <div>{p}</div>;
            })}
          </div>
        </main>
      )}
    </>
  );
};

const TrashCan = (props) => {
  function handleIncrementClick(index) {
    const nextCounters = props.counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    props.setCounter(nextCounters);
  }

  function handleDecrementClick(index) {
    const nextCounters = props.counters.map((c, i) => {
      if (i === index) {
        if (c == 0) {
          return c;
        }
        return c - 1;
      } else {
        return c;
      }
    });
    props.setCounter(nextCounters);
  }

  // Список мусора, індекс массива відповідає розташуванню
  const trashList = ["Trash1", "Trash2", "Trash3", "Trash4"];

  return (
    <div className="relative">
      <div className="w-[300px] h-[400px] mx-[20px]">
        <h1
          className={
            "text-center text-white p-2 mx-[40px] opacity-80 rounded-[30px] font-bold text-[24px] mb-[40px] " +
            `bg-[${props.color}]`
          }
        >
          {props.text}
        </h1>
        <ul className="relative z-20">
          {props.counters.map((counter, i) => {
            return (
              <li
                key={i}
                className={
                  "opacity-80  mx-[40px] rounded-[30px] mt-[20px] py-2 pr-4 text-white text-[18px] flex justify-between " +
                  `bg-[${props.color}]`
                }
              >
                <div>
                  <button
                    className="px-2"
                    onClick={() => {
                      handleIncrementClick(i);
                    }}
                  >
                    +
                  </button>
                  {counter}
                  <button
                    className="px-2"
                    onClick={() => {
                      handleDecrementClick(i);
                    }}
                  >
                    -
                  </button>
                </div>
                <div className="text-white text-[18px] text-right">
                  {trashList[i]}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <img
        src="/recycle2.png"
        className=" opacity-50 h-[300px] w-[300px] absolute z-10 top-[60px] left-[20px]"
      />
    </div>
  );
};

export default MainOblik;
