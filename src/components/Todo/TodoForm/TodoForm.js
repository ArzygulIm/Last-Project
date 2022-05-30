import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createTodo, getAllTodos, getVideosByName} from "../../../actions";

const TodoForm = () => {
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")

    const dispatch = useDispatch()

    const create = (name,description)=>{
        dispatch(createTodo(name,description))
        dispatch(getAllTodos())}

    return (
        <div className={"todo-form"}>
                <input onChange={(e) =>setName(e.target.value)} type="text" placeholder={"Name"}/>
                <input onChange={(e) =>setDescription(e.target.value)} type="text" placeholder={"Description"}/>
                <button onClick={()=>create(name,description)}>Create To Do</button>

        </div>
    );
};

export default TodoForm;