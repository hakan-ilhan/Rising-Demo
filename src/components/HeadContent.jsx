import { faRectangleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Info from "./Info";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
function HeadContent() {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
    toast.success("Welcome", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }, []);

  return (
    <div className="flex flex-col gap-14 mt-4">
      <div className="bg-trial rounded-md flex items-center gap-4 py-4 px-2 text-sm leading-4">
        <h4 className="">
          Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit
          card. <span className="underline ">Start Free Trial</span>
        </h4>
        <FontAwesomeIcon
          icon={faRectangleXmark}
          className="text-gray-500 text-2xl"
        />
      </div>
      <div>
        <h1 className="font-bold text-3xl leading-9">
          Proxies & Scraping Infrastructure
        </h1>
      </div>
      <div className="flex gap-6 md:m-auto">
        <h3 className="text-xl font-medium leading-6">My Proxies</h3>
        <h3 className="text-xl font-medium leading-6 text-risingBlue border-b-4 border-risingBlue">
          Dashboard
        </h3>
      </div>
      <Info />
    </div>
  );
}

export default HeadContent;
