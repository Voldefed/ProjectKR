import Footer from "./components/mainPage/Footer";
import Header from "./components/mainPage/Header";
import Main from "./components/mainPage/Main";

import HeaderOblik from "./components/oblikPage/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainOblik from "./components/oblikPage/Main";

import { useState } from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/oblik" Component={OblikPage} />
      </Routes>
    </BrowserRouter>
  );
}

const MainPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const OblikPage = () => {
  // true - Сортую | false - Додане
  const [buttonSelected, setButtonSelected] = useState(true);

  return (
    <div className="flex flex-col">
      <HeaderOblik
        buttonSelected={buttonSelected}
        setButtonSelected={setButtonSelected}
      />
      <MainOblik buttonSelected={buttonSelected} />
    </div>
  );
};
