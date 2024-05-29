import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import SiderBar from "../components/SiderBar";
import HeadContent from "../components/HeadContent";
import Chart from "../components/Chart";
import Transaction from "../components/Transaction";

function DashBoard() {
  const { table, setTable, info, setInfo } = useContext(Context);

  return (
    <div className="bg-bgColor">
      <div className="flex max-w-[1920px] m-auto">
        <SiderBar />
        <div className="border-l-2 w-[94%] ">
          <div className="w-[70%] m-auto flex flex-col">
            <HeadContent />
            <Chart />
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
