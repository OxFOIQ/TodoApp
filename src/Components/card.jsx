import React from "react";
import EditCard from "./editCard";

const Card = ({ data, setData }) => {
  return data.map((task) => (
    <div key={task.key} className=" w-full p-3">
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 ">
        <div className="mb-2">
          <p className="text-sm text-gray-600 ">Private Tasks</p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            {task.title}
          </div>
          <p className="text-gray-700 text-bold">{task.body}</p>
        </div>
        <div className="">
          <div className="text-sm">
            <p className="text-gray-900">Mohamed Amine</p>
            {/* <p className="text-gray-600">{task.date.toLocaleString()}</p> */}
            <p className="text-gray-600">{task.date.getDate() + "-" + (task.date.getMonth()+1) + "-" + task.date.getFullYear()}</p> 
          </div>
        </div>
        <EditCard data={data} setData={setData} task={task}/>
      </div>
    </div>
  ));
};

export default Card;
