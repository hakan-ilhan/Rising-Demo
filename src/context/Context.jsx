import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const [info, setInfo] = useState();

  const [table, setTable] = useState();

  return (
    <Context.Provider
      value={{
        formData,
        setFormData,
        token,
        setToken,
        info,
        setInfo,
        table,
        setTable,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
