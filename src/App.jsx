import { useState } from 'react'
import "@/index.css";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const changeHandler = (e) => {
    setNewTask(e.target.value);
  };

  const addHandler = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteHandler = (index) => {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  };

  const editHandler = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index]);
  };

  function saveTask(index) {
    const updatedTask = [...tasks]; // updated task contains the copy of tasks array
    updatedTask[index] = editedTask; //Set the specific index of copied array to be whatever's being edited in editedTask
    setTasks(updatedTask); //Set tasks to be the updated copy

    setEditingIndex(null);
    //set the editing index to be empty, aka reset

    //What it does is that it automatically sets the edited task once you click save
    //Without it, you won't be able to save
  }

  function cancelEdit() {
    setEditingIndex(null);
    setEditedTask("");
  }

  return (
  
    <>
    <div className="m-10 text-white">

        <h1 className="flex justify-center text-5xl text-white font-bold text-shadow-[0_0_2px] text-shadow-cyan-500">Todo List</h1>

      <div className="w-5/12">




        <div className="py-5">
          <h1 className="font-bold text-2xl">Enter your tasks</h1>
        </div>
        <div className="flex gap-3">
          <input
            onChange={changeHandler}
            type="text"
            className="bg-gray-800 w-8/12 p-2 rounded-sm"
            placeholder="What will you do today?"
          />
          <button
            onClick={addHandler}
            className="rounded-lg bg-radial to-blue-900 bg-blue-600 font-semibold text-white p-3"
          >
            Add
          </button>
        </div>
      </div>
      <div className="w-full ">
        <ol className="flex flex-col gap-2 py-4 ">
          {tasks.map((task, index) =>
            editingIndex === index ? (
              <div className="flex gap-2">
                <input
                  onChange={(e) => setEditedTask(e.target.value)}
                  type="text"
                  value={editedTask}
                  className="bg-gray-800 w-9/12 p-2 rounded-md"
                ></input>
                <button
                  onClick={() => saveTask(index)}
                  className="bg-green-600 font-semibold w-1/12 text-white rounded-lg p-2"
                >
                  Save
                </button>

                <button
                  onClick={cancelEdit}
                  className="bg-gray-300 font-semibold text-black rounded-lg p-3 "
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex gap-2 text-xl list-decimal">
                <li
                  className=" bg-gray-800 w-11/12 rounded-lg px-3"
                  key={index}
                >
                  {task}
                </li>
                <button
                  onClick={() => deleteHandler(index)}
                  className="bg-red-500 font-semibold text-white rounded-lg p-2 "
                >
                  Delete
                </button>
                <button
                  onClick={() => editHandler(index)}
                  className="bg-blue-600 font-semibold w-1/12 text-white rounded-lg p-2"
                >
                  Edit
                </button>
              </div>
            )
          )}
        </ol>
      </div>
    </div>
    </>
  );
}

export default ToDoList;
