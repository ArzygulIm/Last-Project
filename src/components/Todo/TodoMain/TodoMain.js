import React, {useEffect} from 'react';
import TodoForm from "../TodoForm/TodoForm";
import {useDispatch} from "react-redux";
import {getAllTodos} from "../../../actions";
import TodoOutput from "../TodoOutput/TodoOutput";
import Header from "../../Main/Header/Header";
import Footer from "../../Main/Footer/Footer";
import "../style.css"

const TodoMain = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTodos())
    }, [])
    return (
        <section id={"section-todo"}>
            <Header/>
            <TodoForm/>
            <TodoOutput/>
            <Footer/>
        </section>
    );
};

export default TodoMain;