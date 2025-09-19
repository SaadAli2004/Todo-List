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
    <div className="m-4 text-white">

        <h1 className="flex justify-center text-white font-bold text-4xl">Todo List</h1>

      <div className="w-full">




        <div className="py-5 ">
          <h1 className="font-bold text-2xl">Enter your tasks</h1>
        </div>
        <div className="flex gap-3">
          <input
            onChange={changeHandler}
            type="text"
            className="bg-gray-800 w-8/12 p-2 rounded-sm md:w-6/12 lg:w-4/12"
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
      <div className="w-full lg:pt-10 md:pt-8 md:w-9/12 ">
        <ol className="flex flex-col gap-2 py-4 ">
          {tasks.map((task, index) =>
            editingIndex === index ? (
              <div className="flex gap-2">
                <input
                  onChange={(e) => setEditedTask(e.target.value)}
                  type="text"
                  value={editedTask}
                  className="bg-gray-800 p-2 rounded-md w-7/12"
                ></input>
                <button
                  onClick={() => saveTask(index)}
                  className="bg-green-600 font-semibold text-white rounded-lg p-2"
                >
                  Save
                </button>

                <button
                  onClick={cancelEdit}
                  className="bg-gray-300 font-semibold text-black rounded-lg p-2"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="gap-1 flex items-center border">
                <span className="h-6 flex items-center bg-neutral-800 p-2 rounded-4xl md:text-2xl md:h-8 relative">{index + 1}</span>
                <li
                  className=" bg-gray-800 w-11/12 md:text-xl rounded-lg p-2"
                  key={index}
                >
                  {task}
                </li>
               
                <button
                  onClick={() => editHandler(index)}
                  className="bg-blue-600 font-semibold text-white rounded-lg p-2"
                >
                  Edit
                </button>

                 <button
                  onClick={() => deleteHandler(index)}
                  className="bg-red-500 font-semibold text-white rounded-lg p-2 "
                >
                  Delete
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
