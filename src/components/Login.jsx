import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const {
    formData,
    setFormData,
    token,
    setToken,
    table,
    setTable,
    info,
    setInfo,
  } = useContext(Context);

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get("https://recruitment-api.vercel.app/get-table", {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((response) => {
          setTable(response.data);
        });
      axios
        .get("https://recruitment-api.vercel.app/get-info", {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((response) => {
          setInfo(response.data);
          console.log("INFO :", info);
          history.push("/dash");
        });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://recruitment-api.vercel.app/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.jwt);
        setToken(res.data.jwt);
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
        history.push("/dash");
      });
  };

  return (
    <div>
      <div className="m-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
            className="border-2 border-gray-400 rounded-md font-semibold"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
            className="border-2 border-gray-400 rounded-md font-semibold"
          />
          <button
            type="submit"
            className="border-2 border-gray-400 rounded-md px-2 text-black bg-gray-200 font-semibold"
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
