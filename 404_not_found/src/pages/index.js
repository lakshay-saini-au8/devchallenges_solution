import React from "react";
import Error from "../components/Error";

const Home = ({ theme, toogleTheme }) => {
  return (
    <>
      <Error theme={theme} toogleTheme={toogleTheme} />
    </>
  );
};

export default Home;
