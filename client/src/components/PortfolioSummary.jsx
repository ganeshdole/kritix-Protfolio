import React from "react";
import { IndianRupee, ArrowUpRight, Percent, PieChart } from "lucide-react";

const PortfolioSummary = () => (
  <div className="grid grid-cols-auto-fit-200 gap-4 p-2">
    <SummaryCard title="Total Value" value="2024" icon={IndianRupee} />
    <SummaryCard
      title="Total Gain/Loss"
      value="373.00"
      icon={ArrowUpRight}
      color="text-green-500"
    />
    <SummaryCard
      title="Total Gain/Loss %"
      value="3.4"
      icon={ArrowUpRight}
      color="text-green-500"
    />
    <SummaryCard title="Number of Holdings" value="2" icon={PieChart} />
  </div>
);

const SummaryCard = ({ title, value, icon: Icon, color = "text-black" }) => (
  <div className="h-[120px] rounded-md border-gray-400 border-solid border-[0.1px] shadow-md">
    <span className="flex justify-between items-center m-4 p-1">
      <p className="font-medium">{title}</p>
      <Icon size={16} />
    </span>
    <span className={`flex items-center justify-start font-bold m-4 ${color}`}>
      {title.includes("Total Value") && (
        <IndianRupee size={24} className="font-bold mr-1" strokeWidth={3} />
      )}
      <p className="text-[24px]">{value}</p>
      {title.includes("Gain/Loss") && title.includes("%") && (
        <Percent size={24} className="font-bold" strokeWidth={3} />
      )}
    </span>
  </div>
);

export default PortfolioSummary;
