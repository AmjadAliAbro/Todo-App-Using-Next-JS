import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import AddTask from "@/components/AddTask";
import TaskList from "../components/TaskList";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [tasks, setTasks] = useState<{ task: string; done: boolean }[]>([]);

  function getTask() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(tasks);
  }

  function completeTask(idx: number) {
    let newTasks = tasks;
    newTasks[idx].done = true;
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    getTask();
  }

  function deleteTask(idx: number) {
    const newTasks = tasks;
    newTasks.splice(idx, 1);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    getTask();
  }

  useEffect(() => {
    getTask();
  }, []);

  function addTask(task: string) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push({ task, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    getTask();
  }

  return (
    <main
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
      className="flex flex-col items-center h-full min-h-screen px-2 py-5"
    >
      <Head>
        <title>Simple TodoApp</title>
        <meta name="description" content="Simple TodoApp For Your Work..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#fff] rounded-md w-full h-fit max-w-80 mx-5 py-2 flex justify-center">
        <AddTask addTask={addTask} />
      </div>
      <div className="w-full max-w-[80vw]">
        <TaskList
          deleteTask={deleteTask}
          completeTask={completeTask}
          tasks={tasks}
        />
      </div>
    </main>
  );
}
