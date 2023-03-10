import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import Todo from "./Todo";
import { auth, db } from "../firebase";
import {  collection, deleteDoc, doc, query, onSnapshot, setDoc, updateDoc } from "firebase/firestore";

const style = {
  bg: `min-h-screen h-full w-screen p-4 bg-gradient-to-r from-[#3f0a93] to-[#830a93]`,
  container: `bg-slate-100 max-w-[700px] w-full m-auto rounded-md p-2`,
  heading : `text-3xl font-bold text-gray-500 text-center`,
  form: `flex justify-between`,
  input: `flex p-1 w-full rounded-md border border-2 border-purple-500 focus:outline-none`,
  button: `flex p-2 rounded-md ml-1 bg-purple-500`,
  buttonwimg: `flex p-2 rounded-md ml-1 bg-purple-500`,
  buttonimg: `w-10 h-10`,	
  count: `text-center text-2 text-purple-900`,
}


function Todoapp() {

  const [todos, setTodos] = useState([]);

 async function removeTodo(id){
    await deleteDoc(doc(db, auth.currentUser.uid, id));
  }

   function getTodos() {
    const q = query(collection(db, auth.currentUser.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setTodos(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    })
    return unsubscribe;
  }

 async function addTodo(text, id){
    if (text.value !== '') {
      await setDoc(doc(db, auth.currentUser.uid, id), {
          text: text.value,
          completed: false
        })
      text.value = '';
    }
  }

async function toggleCompleted(todo) {
  await updateDoc(doc(db, auth.currentUser.uid, todo.id), {
      completed: !todo.completed
  })
}

async function logOut() {
    await auth.signOut();
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className={style.bg}>
        <button className={style.buttonwimg} onClick={() => {
            logOut();
        } 
        }><RiLogoutBoxRFill className={style.buttonimg}/></button>
      <div className={style.container}>
        <h3 className={style.heading}>Add ToDo</h3>
        <form className={style.form} onSubmit={e => {
          e.preventDefault();
          addTodo(e.target[0], `${auth.currentUser.email}${Date.now()}` );
        }}>
          <input type="text" className={style.input} placeholder="Add ToDo" />
          <button className={style.button}><AiOutlinePlusCircle size={30}/></button>
        </form>
        <ul className={style.ul}>
          {todos.map((todo, index) => (
           <Todo key={index} 
           todo={todo}
          addTodo={addTodo}
           removeTodo={removeTodo}
           toggleCompleted={toggleCompleted}
           />
          ))}
        </ul>
        <p className={style.count}>You have {todos.length} ToDos</p>
      </div>

    </div>
  );
}

export default Todoapp;
