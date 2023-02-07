import {FaRegTrashAlt} from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { useState } from "react";

const style = {
    li: `flex p-2 rounded-md my-2 bg-purple-500`,
    row: `flex p-1 justify-between items-center my-1`,
    checkbox: `mr-2`,
    text: `mr-2`,
}


const Todo=({todo, removeTodo, addTodo}) => {
   const [editing, setEdit] = useState(false);

    return (
        <li className={style.li}>
            <div className={style.row}>
            <input type="checkbox" className={style.checkbox}/>
            {editing ? (
          <input type="text" defaultValue={todo.text} onChange={(e)=> {
            addTodo(e.target, todo.id);
          } }/>
        ) : (
          <p className={style.text}>{todo.text}</p>
        )}
            </div>
            <button onClick={
                () => {
                    setEdit(!editing);
                }
            }>{<FaEdit/>}</button>
            <button onClick={
                () => {
                    removeTodo(todo.id);
                }
            }>{<FaRegTrashAlt/>}</button>
         
        </li>
    )
}

export default Todo;