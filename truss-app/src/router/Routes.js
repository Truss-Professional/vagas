import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import TodoList from '../components/TodoList'

const RouterWrapp = () => {
    return(
        <Routes>
            <Route path="/"
                element = {<Home/>}
            />
            <Route path="/todolist"
                element = {<TodoList/>}
            />
            <Route path="*"
                element = {
                    <iframe src="https://giphy.com/embed/3osxY9kuM2NGUfvThe"
                        width="100%" height="400" frameBorder="0" allowFullScreen>
                    </iframe>
                }
            />
        </Routes>
    )
}

export default RouterWrapp