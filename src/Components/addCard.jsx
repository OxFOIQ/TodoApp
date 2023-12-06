import React from "react";
import { useRef, useState } from "react";

const AddCard = ({ data, setData }) => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const Menu = () => {
    setMenuOpen(!MenuOpen);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [index, setIndex] = useState(0);
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const buttonSaveChanges = () => {
    if (data === null) {
      setData([{ key: index, title: titleRef.current.value, body: bodyRef.current.value, date: startDate }]);
    } else {
      setData((prevData) => [
        { key: index, title: titleRef.current.value, body: bodyRef.current.value, date: startDate },
        ...prevData,
      ]);
    }
    setIndex((prev) => prev + 1);
  };

  return (
    <>
      <button className="bg-blue-500 text-white px-5 py-2 rounded" onClick={Menu}>
        Add Task
      </button>

      {MenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md transform transition-transform translate-x-0">
            <div className="p-4">
              <button className="text-white px-3 py-2 rounded bg-blue-500 mb-12" onClick={Menu}>
                Close
              </button>
              <div className="canvas py-3">
                <h1 className="text-bold">Edit Title :</h1>
                <input
                  className="p-2 border border-solid border-y-cyan-400 border-x-cyan-400 rounded"
                  type="text"
                  ref={titleRef}
                />
              </div>
              <div className="canvas py-3">
                <h1 className="text-bold">Edit Task :</h1>
                <textarea
                  rows={5}
                  className="p-2 border border-solid border-y-cyan-400 border-x-cyan-400 rounded"
                  type="text"
                  ref={bodyRef}
                />
              </div>
              <div className="canvas py-3">
                <h1 className="text-bold">Edit Date :</h1>
                <input
                  className="p-2 border border-solid border-y-cyan-400 border-x-cyan-400 rounded"
                  type="date"
                  onChange={(event) => {
                    setStartDate(event.target.value);
                  }}
                />
              </div>
              <div className="canvas py-3">
                <button
                  className="text-white px-3 py-2 rounded bg-blue-500 mb-12"
                  onClick={buttonSaveChanges}
                >
                  Add New Taks
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCard;
