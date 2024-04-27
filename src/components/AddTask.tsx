import React, { useState } from "react";
import { LuPlusCircle } from "react-icons/lu";

const AddTask = ({ addTask }: { addTask: (task: string) => void }) => {
  const [value, setValue] = useState("");
  return (
    <div className="w-full px-5">
      <h1 className="text-2xl text-[#333] text-center py-2">TodoList</h1>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="bg-[#333] rounded-md flex items-center justify-center gap-2 text-[#fff] w-full my-2 py-2 px-2"
        placeholder="Enter Task"
      />
      <button onClick={() => addTask(value)} className="bg-blue-400 py-3 rounded-md flex items-center justify-center gap-2 text-[#fff] w-full">
        AddTask
        <LuPlusCircle />
      </button>
    </div>
  );
};

export default AddTask;
