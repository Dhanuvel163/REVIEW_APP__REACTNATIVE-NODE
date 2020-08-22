import React from "react";
import Context from "./context";
import useglobalstate from "./useglobalState";

const GlobalProviders = ({ children }) => {
  return (
    <Context.Provider value={useglobalstate()}>{children}</Context.Provider>
  );
};

export default GlobalProviders;
