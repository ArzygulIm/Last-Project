import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteTodos, doneTodos, getAllTodos} from "../../../actions";
import EditTodoModal from "../EditTodoModal/EditTodoModal";

const TodoOutput = () => {
    const [modal, setModal] = useState(false)
    const data = useSelector(state => state.todos)
    console.log(data)

    const message = useSelector(state=>state.message)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllTodos())
    },[message])
    const done = (id) => {
        dispatch(doneTodos(id))


    }

    const deleteTodo = (id) => {
        dispatch(deleteTodos(id))

    }
    return (
        <div className={"todo-output"}>{data && data.map((el, index) => {
            return (

                <div className={"block"} key={index}>
                    <div className="text-wrap">
                        <p>{el.title}</p>
                        <p>{el.description}</p>
                    </div>
                    <div className="btn-wrap">
                        <button onClick={() => done(el._id)}>Done</button>
                        <button onClick={() => setModal(true)}>Edit</button>
                        <button onClick={() => deleteTodo(el._id)}>Delete</button>
                    </div>
                    {modal === true ? <EditTodoModal modal={modal} setModal={setModal} id={el._id}/> : null}
                </div>

            )
        })}

        </div>
    );
};

export default TodoOutput;