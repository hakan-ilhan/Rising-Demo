import React, { useContext } from "react";
import { Context } from "../context/Context";

function Info() {
  const { info } = useContext(Context);

  if (!info) {
    return;
  }
  return (
    <div className="flex gap-8 md:flex-col md:m-auto">
      <div className="bg-status1 rounded-2xl py-6  pl-4 flex flex-col gap-2 justify-center w-[220px]">
        <p className="font-semibold">Subscription expires on</p>
        <h3 className="font-medium text-2xl">{info.expireTime}</h3>
      </div>
      <div className="bg-status2 rounded-2xl py-6  pl-4 flex flex-col justify-center gap-2 w-[220px]">
        <p className="font-semibold">Last charge</p>
        <h3 className="font-medium text-2xl">
          {info.lastChargeAmount}{" "}
          <span className="text-sm">{info.lastCharge}</span>{" "}
        </h3>
      </div>
      <div className="bg-status1 rounded-2xl py-6 pl-4 flex flex-col justify-center gap-2 w-[220px]">
        <p className="font-extrabold">Total Usage Data</p>
        <h3 className="font-extrabold text-2xl">
          {info.totalDataUsage / 1000} GB
        </h3>
      </div>
      <div className="bg-status2 rounded-2xl py-6  pl-4 flex flex-col justify-center gap-2 w-[220px]">
        <p className="font-extrabold">Daily Usage Data</p>
        <h3 className="font-extrabold text-2xl">{info.dailyUsage / 1000} GB</h3>
      </div>
    </div>
  );
}

export default Info;
