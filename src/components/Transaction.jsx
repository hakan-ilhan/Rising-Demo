import React, { useContext } from "react";
import DropDown from "./DropDown";
import { Context } from "../context/Context";

function Transaction() {
  const { table } = useContext(Context);

  if (!table) {
    return;
  }
  return (
    <div className="w-[70%] pt-24 md:pt-6">
      <div className="flex items-center gap-6 text-sm font-semibold">
        <div className="w-24 text-center">Type</div>
        <div className="w-24 text-center">Location</div>
        <div className="w-24 text-center">Rental Period</div>
        <div className="w-24 text-center">Number of IP</div>
        <div className="w-24 text-center">SpesificPurpose</div>
        <div className="w-24 text-center">Date</div>
        <div className="w-24 text-center">Actions</div>
      </div>
      <hr className="text-gray-400"></hr>
      {table.data.map((item, index) => {
        const dateObject = new Date(item.date);
        const year = dateObject.getFullYear();
        const month = dateObject.toLocaleString("default", { month: "short" });
        const day = dateObject.getDate();

        // Formatlı tarih oluşturma
        const formattedDate = `${day} ${month} ${year}`;
        return (
          <>
            <div className="flex items-center gap-6 text-sm " index={index}>
              <div className="w-24 text-center">{item.type}</div>
              <div className="w-24 text-center">{item.location}</div>
              <div className="w-24 text-center">{item.rental}</div>
              <div className="w-24 text-center">{item.ipcount}</div>
              <div className="w-24 text-center">{item.purpose}</div>
              <div className="w-24 text-center">{formattedDate}</div>
              <DropDown number={item.ipcount} />
            </div>
            <hr className="text-gray-400"></hr>
          </>
        );
      })}
    </div>
  );
}

export default Transaction;
