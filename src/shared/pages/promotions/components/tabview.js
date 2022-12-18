import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TabView = ({data}) => {
  console.log('=====data====',data)
  let navigate = useNavigate();
  const [openTab, setOpenTab] = useState("New Players");
  const tab_title = [
    "New Players",
    "Casino",
    "Live",
    "Poker",
    "Virtual Sports",
  ];
  const promotions = [
    {
      id: 1,
      title: "First Deposit Bonus",
      description: "€100 on your first Deposit +100 Free Spin",
      image: "/images/casino1.png",
    },
    {
      id: 2,
      title: "Second Deposit Bonus",
      description: "€100 on your first Deposit +100 Free Spin",
      image: "/images/casino1.png",
    },
    {
      id: 3,
      title: "Third Deposit Bonus",
      description: "€100 on your first Deposit +100 Free Spin",
      image: "/images/casino1.png",
    },
    {
      id: 4,
      title: "Free Spin Every Monday",
      description: "€100 on your first Deposit +100 Free Spin",
      image: "/images/casino2.png",
    },
    {
      id: 5,
      title: "Promotion Two",
      description: "€100 on your first Deposit +100 Free Spin",
      image: "/images/casino3.png",
    },
    {
      id: 6,
      title: "Promotion Three",
      description: "€100 on your first Deposit +100 Free Spin",
      image: "/images/casino4.png",
    },
  ];

  const OpenDetails = ({id}) => {
    navigate(`/${id}`); 
  };
  return (
    <div className="px-20">
      <div className="container mx-auto my-8">
        <div className="">
          <ul className="flex space-x-6 rounded-md bg-ulColor">
            {tab_title.map((item, index) => (
              <li
                className={`p-4 ${
                  openTab === item ? "border-b-4 border-red-500" : ""
                }`}
                key={index}
              >
                <a
                  href="#"
                  onClick={() => setOpenTab(item)}
                  className="font-bold"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="image" className="rounded-lg" />
            <div className="px-9 py-6">
              <h2 className="font-bold text-2xl">{item.title}</h2>
              <h2 className="text-xl">{item.description}</h2>
              <button
                className="bg-secondary hover:bg-blue-700 font-bold py-3 px-4 w-64 mt-5 text-white"
                onClick={() => OpenDetails(item)}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TabView;
