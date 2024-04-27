import { FaCircleCheck } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import React from "react";

const TaskList = ({
  tasks,
  completeTask,
  deleteTask,
}: {
  tasks: { task: string; done: boolean }[];
  completeTask: (idx: number) => void;
  deleteTask: (idx: number) => void;
}) => {
  return (
    <div className="bg-[#333] w-full rounded-md p-5 my-2">
      <h1 className="text-2xl text-center text-white">Your Tasks</h1>
      {tasks.map((task, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center p-3 rounded-md my-5 bg-white"
        >
          <h1
            className={`text-2xl ${task.done && "line-through"}`}
          >
            {task.task}
          </h1>
          <div className="flex gap-4">
            <button>
              <FaCircleCheck onClick={() => completeTask(idx)} />
            </button>
            <button>
              <FaTrashAlt onClick={() => deleteTask(idx)} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
