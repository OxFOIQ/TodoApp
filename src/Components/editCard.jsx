import React, { useRef, useState } from "react";

const EditCard = ({ data, setData, task }) => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const Menu = () => {
    setMenuOpen(!MenuOpen);
  };

  const MarkAsCom = () => {
    const newArray = [];
    data.map((card) => {
      if (card.key !== task.key) {
        newArray.push(card);
      }
    });
    setData([...newArray]);
  };

  const [startDate, setStartDate] = useState(task.date);

  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const buttonSaveChanges = () => {
    const newArray = [];
    data.map((card) => {
      if (card.key !== task.key) {
        newArray.push(card);
      }
    });
    setData([
      {
        key: task.key,
        title: titleRef.current.value,
        body: bodyRef.current.value,
        date: startDate,
      },
      ...newArray,
    ]);
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white px-5 py-2 rounded mt-4 m-3"
        onClick={Menu}
      >
        Edit
      </button>

      <button
        className="bg-blue-500 text-white px-5 py-2 rounded mt-4 m-3"
        onClick={MarkAsCom}
      >
        Mark as Complete
      </button>

      {MenuOpen && (
        // <div className="fixed inset-0 bg-gray-900 bg-opacity-50" onClick={Menu}>
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md transform transition-transform translate-x-0">
            <div className="p-4">
              <button
                className="text-white px-3 py-2 rounded bg-blue-500 mb-12"
                onClick={Menu}
              >
                Close
              </button>
              <div className="canvas py-3">
                <h1 className="text-bold ">Edit Title :</h1>
                <input
                  className="p-2 border border-solid border-y-cyan-400 border-x-cyan-400 rounded"
                  type="text"
                  ref={titleRef}
                  defaultValue={task.title}
                />
              </div>
              <div className="canvas py-3">
                <h1 className="text-bold ">Edit Task :</h1>
                <textarea
                  rows={5}
                  className="p-2 border border-solid border-y-cyan-400 border-x-cyan-400 rounded"
                  type="text"
                  ref={bodyRef}
                  defaultValue={task.body}
                />
              </div>
              <div className="canvas py-3">
                <h1 className="text-bold ">Edit Date :</h1>
                <input
                  className="p-2 border border-solid border-y-cyan-400 border-x-cyan-400 rounded"
                  type="date"
                  onChange={(date) => {
                    setStartDate(date);
                  }}
                />
              </div>
              <div className="canvas py-3">
                <button
                  className="text-white px-3 py-2 rounded bg-blue-500 mb-12"
                  onClick={buttonSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditCard;
