/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {  useState } from "react";
import back from "../Assets/backgorund.png";
import Card from "./card";
import AddCard from "./addCard";

// const data_card = [
//   {
//     key: 1,
//     title: "first title",
//     body: "first body",
//     date: new Date(),
//   },
//   {
//     key: 2,
//     title: "second title",
//     body: "second body",
//     date: new Date(),
//   },
// ];

const Home = () => {
  const [data, setData] = useState(null);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="leftSide w-full h-full bg-gray-50">
        <div className="Content p-4 md:p-8 flex flex-col h-full">
          {data ? (
            <div className="overflow-y-scroll max-h-[700px]">
              <Card data={data} setData={setData} />
            </div>
          ) : (
            // <div className="flex items-center justify-center min-h-full">
            <div className="flex items-center justify-center max-h-screen my-60">
              <h3 className="text-center text-4xl  sm:text-5xl lg:text-6xl tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-700 to-green-600">
                Start creating your next Task & Get Productive
              </h3>
              
            </div>
          )}
          <div className="button flex flex-row justify-center items-center ">
            <AddCard data={data} setData={setData} />
          </div>
        </div>
      </div>

      <div className="rightSide w-full h-full">
        <img
          className="h-full w-full rounded-lg object-cover object-center"
          src={back}
          alt="not found"
        />
      </div>
    </div>
  );
};

export default Home;
