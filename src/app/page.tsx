"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-96 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Todo App</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="flex gap-2 w-full mb-4">
            <Input 
              value={task} 
              onChange={(e) => setTask(e.target.value)} 
              placeholder="Add a new task" 
              className="flex-1"
            />
            <Button onClick={addTask}>Add</Button>
          </div>
          <ul className="w-full">
            {tasks.map((t, index) => (
              <li key={index} className="flex justify-between items-center p-2 bg-white shadow rounded mb-2">
                {t}
                <Button onClick={() => removeTask(index)} variant="destructive">Remove</Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

