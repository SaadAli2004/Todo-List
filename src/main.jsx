import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoList from './App'
import "@/index.css";
createRoot(document.getElementById('root')).render(
    <div>

        <ToDoList/>
    </div>
)
