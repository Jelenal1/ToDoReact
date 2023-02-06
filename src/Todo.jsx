import {FaRegTrashAlt} from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const style = {
    li: `flex p-2 rounded-md my-2 bg-purple-500`,
    row: `flex p-1 justify-between items-center my-1`,
    checkbox: `mr-2`,
    text: `mr-2`,
}


const todo=({todo}) => {
    return (
        <li className={style.li}>
            <div className={style.row}>
            <input type="checkbox" className={style.checkbox}/>
            <p className={style.text}>{todo}</p>
            </div>
            <button className={style.button}>{<FaEdit/>}</button>
            <button className={style.button}>{<FaRegTrashAlt/>}</button>
         
        </li>
    )
}

export default todo;