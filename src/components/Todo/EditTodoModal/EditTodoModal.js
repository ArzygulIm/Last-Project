import React, {useEffect, useState} from 'react';
import "./EditTodoModal.css"
import {editTodos, getAllTodos} from "../../../actions";
import {useDispatch, useSelector} from "react-redux";

const EditTodoModal = ({modal, setModal,id}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()
    const edit = (name,description)=>{
        dispatch(editTodos(id,name,description))
        dispatch(getAllTodos())
        setModal(false)
    }
    const message = useSelector(state=>state.message)

    useEffect(()=>{
        dispatch(getAllTodos())
    },[message])

    if (modal === true) {
        document.body.classList.add('hidden')
    }
    return (
        <section id={"modal"}>
            <div onClick={() => setModal(false)} className={modal === true ? "backdrop backdropActive" : "backdrop"}>

            </div>

            <div className={modal === true ? "modal modalActive" : "modal"}>

                <div className="modalHeader">
                    <p className="modalHeaderTitle">Edit Todo</p>
                    <div onClick={() => setModal(false)} className="modalCloseButton">
                        <span>

                        </span>
                        <span>

                        </span>
                    </div>
                </div>
                <div className="modalContent">
                    <div id="edit__todo-form">

                        <input onChange={(e) => setTitle(e.target.value)} type="text" id="edit__name"
                               placeholder="Name"/>
                        <input onChange={(e) => setDescription(e.target.value)} type="text" id="edit__description"
                               placeholder="description"/>

                        <div id="edit-btn">
                            <button onClick={()=>edit(title,description)}>Edit ToDo</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default EditTodoModal;