import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import {Header, ContainerHome, HomeFlexBox} from "./styled"
import Logo from "../assets/imgLog.png"
import LogoHeader from "../assets/logo.png"

const Home = () => {
    const navigate = useNavigate()

    const goToTodoList = () => {
      navigate("/todolist")
    }
    return(
        <div>
            <Header>
                <button
                    onClick={goToTodoList}
                    >
                    Ver TodoList
                </button>
                <img src={LogoHeader}/>
            </Header>
            <HomeFlexBox>
                <img src={Logo}/>
                <h2>App Mobile Truss</h2>
            </HomeFlexBox>

        </div>
    )
}

export default Home