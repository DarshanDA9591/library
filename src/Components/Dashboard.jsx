// src/components/Dashboard.js
import React from "react";
import SalesChart from "./SalesChart";
import StatsCard from "./StatsCard";
import FiBox from "../assets/read.png";
import Path from "../assets/Path.png";
import Text from "./Text";
import TopLabel from "./TopLabel";
import decrese from '../assets/decrease.png'
import img1 from "../assets/library1.jpeg"
import img2 from "../assets/library2.jpeg"
import img3 from "../assets/library3.jpeg"
import img4 from "../assets/library4.jpeg"


const Dashboard = () => {
  const options = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 
  const StatsDataTop = [
    {
      title: <b>PUC</b>,
      value: "Total:260",
      icon: FiBox,
      Path,
      ColTrend: "129",
      trend: "Books are Available",

    },
    {
      title: <b>BCA</b>,
      value: "Total:189",
      icon: FiBox,
      Path: decrese,
      ColTrend: "8",
      trend: "Books are Available",
    },
    {
      title: <b>MCS</b>,
      value: "Total:293",
      icon: FiBox,
      Path,
      ColTrend: "200",
      trend: "Books are Available",
    },
    {
      title: <b>PHD's</b>,
      value: "Total:689",
      icon: FiBox,
      Path:decrese,
      ColTrend: "5",
      trend: "Books are Available",
    },
  ];
  const StatsDataBottom = [
    {
      title: <b>Computer Science</b>,
      value: "Total:689",
      icon: FiBox,
      Path:decrese,
      ColTrend: "39",
      trend: "Books are Available",
    },
    {
      title: <b>Chemistry</b>,
      value: "Total689",
      icon: FiBox,
      Path,
      ColTrend: "269",
      trend: "Books are Available",
    },
    {
      title: <b>Mathematics</b>,
      value: "Total:500",
      icon: FiBox,
      Path,
      ColTrend: "389",
      trend: "Books are Available",
    },
    {
      title: <b>Physics</b>,
      value: "389",
      icon: FiBox,
      Path,
      ColTrend: "269",
      trend: "Books are Available",
    },
  ];
  return (
    <div className="w-[97%] flex flex-col gap-5 p-5">
      <div className="flex w-full gap-5">
        {StatsDataTop.map((item) => (
          <StatsCard
            title={item.title}
            value={item.value}
            icon={item.icon}
            path={item.Path}
            ColTrend={item.ColTrend}
            trend={item.trend}
          />
        ))}
      </div>
      <div className="w-full flex gap-5">
        <div className="p-4 w-[75%] rounded-3xl bg-white shadow-[6px_6px_54px_0px_#0000000D]">
          {/* <TopLabel label="Sales Chart" optionInput={options} link={false} detailBtn={false}/> */}
          <SalesChart />
        </div>
        <div className="p-5 w-[25%] flex flex-col gap-4 rounded-3xl bg-white shadow-[6px_6px_54px_0px_#0000000D]">
  <Text text="Library Staff" fontSize="4vh" fontWeight="400" width="100%" color="#636466" />
  <div className="flex flex-col gap-3">
    {[
      { name: "Alice Johnson", designation: "Librarian", image: img1 },
      { name: "Bob Smith", designation: "Assistant Librarian", image: img2 },
      { name: "Catherine Lee", designation: "Catalog Specialist", image: img3 },
      { name: "David Brown", designation: "Digital Archivist", image: img4 },
    ].map((staff, i) => (
      <div key={i} className="w-full p-6 bg-zinc-200 rounded-lg flex items-center gap-4">
        <img
          src={staff.image}
          alt={staff.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <div className="text-lg font-medium">{staff.name}</div>
          <div className="text-sm text-gray-600">{staff.designation}</div>
        </div>
      </div>
    ))}
  </div>
</div>



      </div>
      <div className="flex justify-center w-full gap-5">
        {StatsDataBottom.map((item) => (
          <StatsCard
            title={item.title}
            value={item.value}
            icon={item.icon}
            path={item.Path}
            ColTrend={item.ColTrend}
            trend={item.trend}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
