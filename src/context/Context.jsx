import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
export const Context = createContext();

function ContextProvider({ children }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const [info, setInfo] = useState();

  const [table, setTable] = useState();
  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://recruitment-api.vercel.app/get-table", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        setTable(response.data);
        console.log("TABLE :", table);
        history.push("/dash");
      })
      .catch((error) => console.error("Error fetching table data:", error));

    axios
      .get("https://recruitment-api.vercel.app/get-info", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        setInfo(response.data);
        console.log("INFO :", info);
      })
      .catch((error) => console.error("Error fetching info data:", error));
  }, []);

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
