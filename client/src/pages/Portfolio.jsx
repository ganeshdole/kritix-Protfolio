import { useEffect, useState } from "react";

import {
  IndianRupee,
  ArrowUpRight,
  Percent,
  PieChart,
  Layers,
} from "lucide-react";

const Portfolio = () => {
  return (
    <section className="p-4">
      <h1 className="font-bold text-2xl m-4">Your Stock Portfolio</h1>
      <div className="grid grid-cols-auto-fit-200 gap-4 p-2 ">
        <div className="h-[120px] rounded-md border-slate-900 border-solid border-[0.1px] shadow-md">
          <span className="flex justify-between items-center m-4 p-1">
            <p className="font-medium">Total Value</p>
            <IndianRupee size={16} />
          </span>
          <span className="flex items-center justify-start font-bold m-4">
            <IndianRupee size={24} className="font-bold mr-1" strokeWidth={3} />
            <p className="text-[24px]">2024</p>
          </span>
        </div>
        <div className="h-[120px] rounded-md border-slate-900 border-solid border-[0.1px] shadow-md">
          <span className="flex justify-between items-center m-4 p-1">
            <p className="font-medium">Total Gain/Loss</p>
            <ArrowUpRight size={16} />
          </span>
          <span className="flex items-center justify-start font-bold m-4 text-green-500">
            <IndianRupee size={24} className="font-bold mr-1" strokeWidth={3} />
            <p className="text-[24px] ">373.00</p>
          </span>
        </div>
        <div className="h-[120px] rounded-md border-slate-900 border-solid border-[0.1px] shadow-md">
          <span className="flex justify-between items-center m-4 p-1">
            <p className="font-medium ">Total Gain/Loss</p>
            <ArrowUpRight size={16} />
          </span>
          <span className="flex items-center justify-start font-bold m-4 text-green-500">
            <p className="text-[24px] mr-1 p-1">3.4</p>
            <Percent size={24} className="font-bold" strokeWidth={3} />
          </span>
        </div>
        <div className="h-[120px] rounded-md border-slate-900 border-solid border-[0.1px] shadow-md">
          <span className="flex justify-between items-center m-4 p-1">
            <p className="font-medium ">Number of Holdings</p>
            <PieChart size={16} />
          </span>
          <span className="flex items-center justify-start font-bold m-4">
            <Layers size={24} className="font-bold mr-1" strokeWidth={3} />
            <p className="text-[24px]">2</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
